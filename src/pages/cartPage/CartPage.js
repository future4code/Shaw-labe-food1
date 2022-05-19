
import { Footer } from "../../components/footer/Footer";
import React, { useContext, useEffect, useState } from "react"
import Header from "../../components/header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import { ProductOnCartPage } from "./productOnCartPage/ProductOnCartPage";
import { Button, Checkbox } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";


function CartPage() {
  const [paymentMethod, setPaymentMethod] = useState("")
  const { states, requests, setters } = useContext(GlobalContext);

  //-- Montando objeto para o body da requisição --//
  const cartBody = states.cart?.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity
    }
  })

  //-- Request place order --//
  const onClickPlaceOrder = () => {

    const body = {...cartBody, paymentMethod}
    console.log(body);
    axios
      .post(`${BASE_URL}restaurants/${states.restaurantDetail?.restaurant.shipping}/order`, body, { headers: { auth: localStorage.getItem("tokenadress") } })
      .then((res) => {
        console.log("Seu pedido foi enviado ao restaurante")
      })
      .catch((err) => {
        console.log('Deu ruim: ', err.response.data)
      })
  }


  //-- Funções para setar paymentMethod --//
  const onClickCreditCard = () => {
    setPaymentMethod("creditcard")
  }
  const onClickMoney = () => {
    setPaymentMethod("money")
  }

  //-- Calcular subtotal do carrinho --//
  let totalPrice = 0
  const getTotalPrice = states.cart.map((item) => {
    return totalPrice = totalPrice + (item.price * item.quantity)
  })

  //-- Map para renderizar produtos no carrinho --//
  const mapItemsOnCart = states.cart.map((item) => {
    return (
      <ProductOnCartPage shipping={states.restaurantDetail?.restaurant.shipping} item={item} key={item.id} />
    )
  })

  //-- Renderização --//
  useEffect(() => {
    requests.getRestaurantDetail(states.restaurantId)
    requests.getFullAddress()
    setters.setHeaderText("Meu carrinho")
    setters.setHeaderButton("")
  }, [totalPrice]);
  console.log(paymentMethod);

  return (
    <div>
      <Header />

      {/* Container com endereço de entrega  */}
      <div>
        <p>Endereço de entrega</p>
        <p>{states.address?.address.street}, {states.address?.address.number}</p>
      </div>
      <hr />
      <br />

      {/* Nome / Endereço / Tempo de entrega do restaurante / Map dos produtos / Valor do frete */}
      <div>
        {states.restaurantDetail?.restaurant.name}
        <br />
        {states.restaurantDetail?.restaurant.address}
        <br />
        {states.restaurantDetail?.restaurant.shipping} min
        <hr />
        <br />
        {mapItemsOnCart}
      </div>

      {/* Subtotal */}
      <div>
        Subtotal R${totalPrice.toFixed(2)}
      </div>
      <br />
      <hr />
      <br />

      {/* Formas de pagamento  */}
      <div>
        <h3>Formas de pagamento</h3>
        <hr />
        <Checkbox checked={paymentMethod === "creditcard" ? true : false} onClick={() => onClickCreditCard()} /> Cartão de crédito
        <br />
        <Checkbox checked={paymentMethod === "money" ? true : false} onClick={() => onClickMoney()} /> Dinheiro
      </div>

      {/* botão para enviar requisição */}
      <div>
        <Button onClick={() => onClickPlaceOrder()} color="primary" fullWidth> Confimar </Button>
      </div>
      <Footer page='cart' />
    </div>
  )
}

export default CartPage;