import { Footer } from "../../components/footer/Footer";
import React, { useContext, useEffect, useState } from "react"
import Header from "../../components/header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import { ProductOnCartPage } from "./productOnCartPage/ProductOnCartPage";
import { Button, Checkbox } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import Loading from '../../components/Loading/Loading'
import { goToFeedPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate()
  const [method, setMethod] = useState("")
  const { states, requests, setters } = useContext(GlobalContext);

  //-- Montando objeto para o body da requisição --//
  const cartBody = states.cart?.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity
    }
  })
  const body = { products: cartBody, paymentMethod: method }

  //-- Request place order --//
  const onClickPlaceOrder = () => {
    axios.post(`${BASE_URL}restaurants/${states.restaurantId}/order`, body, { headers: { auth: localStorage.getItem("tokenadress") } })
      .then((res) => {
        alert("Seu pedido foi enviado ao restaurante")
        goToFeedPage(navigate)
        setters.setCart([])
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }


  //-- Funções para setar paymentMethod --//
  const onClickCreditCard = () => {
    setMethod("creditcard")
  }
  const onClickMoney = () => {
    setMethod("money")
  }

  //-- Calcular subtotal do carrinho --//
  let totalPrice = 0
  const getTotalPrice = states.cart.map((item) => {
    return totalPrice = totalPrice + (item.price * item.quantity) + states.restaurantDetail.restaurant.shipping
  })

  //-- Map para renderizar produtos no carrinho --//
  const mapItemsOnCart = states.cart.map((item) => {
    return (
      <ProductOnCartPage shipping={states.restaurantDetail?.restaurant.shipping} item={item} key={item.id} />
    )
  })

  //-- Renderização --//
  useEffect(() => {
    (states.restaurantId === {}
      ?
      requests.getRestaurantDetail(states.restaurantId)
      :
      setters.setUpdate())
    requests.getFullAddress()
    setters.setHeaderText("Meu carrinho")
    setters.setHeaderButton("")
  }, [totalPrice]);

  return (
    <div>
      <Header />

      {states.address?.address.street
        ?
        <>
          {/* Container com endereço de entrega  */}
          <div>
            <p>Endereço de entrega</p>
            <p>{states.address?.address.street}, {states.address?.address.number}</p>
          </div>
          <hr />
          <br />

          {/* Nome / Endereço / Tempo de entrega do restaurante / Map dos produtos / Valor do frete */}
          {states.cart.length
            ?
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
            :
            "Carrinho vazio"
          }

          {/* Subtotal */}
          <div>
            Frete R$
            {states.cart.length
              ?
              states.restaurantDetail?.restaurant.shipping.toFixed(2)
              :
              "0,00"
            }
            <br />
            Subtotal R${totalPrice.toFixed(2)}
          </div>
          <br />
          <hr />
          <br />

          {/* Formas de pagamento  */}
          <div>
            <h3>Formas de pagamento</h3>
            <hr />
            <Checkbox checked={method === "creditcard" ? true : false} onClick={() => onClickCreditCard()} /> Cartão de crédito
            <br />
            <Checkbox checked={method === "money" ? true : false} onClick={() => onClickMoney()} /> Dinheiro
          </div>

          {/* botão para enviar requisição */}
          <div>
            <Button onClick={() => onClickPlaceOrder()} color="primary" fullWidth> Confimar </Button>
          </div>
        </>
        :
        <Loading />
      }

      <Footer page='cart' />
    </div>
  )
}

export default CartPage;