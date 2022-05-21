import { Footer } from "../../components/footer/Footer";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import { ProductOnCartPage } from "./productOnCartPage/ProductOnCartPage";
import { CardActionArea, Radio, Typography } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import Loading from "../../components/Loading/Loading";
import { goToFeedPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useProtectdPage from "../../hooks/useProtectedPage";
import {
  AddressData,
  ButtonConfirm,
  CardMediaImg,
  Container,
  Data,
  Delivery,
  EmptyCartP,
  PaymentMethods,
  Subtotal,
} from "./styled";

function CartPage() {
  useProtectdPage();
  const navigate = useNavigate();
  const [method, setMethod] = useState("");
  const { states, requests, setters } = useContext(GlobalContext);

  //-- Montando objeto para o body da requisição --//
  const cartBody = states.cart?.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
    };
  });
  const body = { products: cartBody, paymentMethod: method };

  //-- Request place order --//
  const onClickPlaceOrder = () => {
    axios
      .post(`${BASE_URL}restaurants/${states.restaurantId}/order`, body, {
        headers: { auth: localStorage.getItem("tokenadress") },
      })
      .then((res) => {
        alert("Seu pedido foi enviado ao restaurante");
        goToFeedPage(navigate);
        setters.setCart([]);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  //-- Funções para setar paymentMethod --//
  const onClickCreditCard = () => {
    setMethod("creditcard");
  };
  const onClickMoney = () => {
    setMethod("money");
  };

  //-- Calcular subtotal do carrinho --//
  let totalPrice = 0;
  const getTotalPrice = states.cart.map((item) => {
    return (totalPrice =
      totalPrice +
      item.price * item.quantity +
      states.restaurantDetail.restaurant.shipping);
  });

  //-- Map para renderizar produtos no carrinho --//
  const mapItemsOnCart = states.cart.map((item) => {
    return (
      <ProductOnCartPage
        shipping={states.restaurantDetail?.restaurant.shipping}
        item={item}
        key={item.id}
      />
    );
  });

  //-- Renderização --//
  useEffect(() => {
    states.restaurantId === {}
      ? requests.getRestaurantDetail(states.restaurantId)
      : setters.setUpdate();
    requests.getFullAddress();
    setters.setHeaderText("Meu carrinho");
    setters.setHeaderButton("");
  }, [totalPrice]);

  return (
    <div>
      <Header />

      {states.address?.address.street ? (
        <>
          {/* Container com endereço de entrega  */}
          <AddressData>
            <Data>
              <h4>Endereço entrega</h4>
              <p>
                {states.address?.address.street},{" "}
                {states.address?.address.number}
              </p>
            </Data>
          </AddressData>

          {/* Nome / Endereço / Tempo de entrega do restaurante / Map dos produtos / Valor do frete */}
          {states.cart.length ? (
            // <div>
            //   {states.restaurantDetail?.restaurant.name}
            //   <br />
            //   {states.restaurantDetail?.restaurant.address}
            //   <br />
            //   {states.restaurantDetail?.restaurant.shipping} min
            //   <hr />
            //   <br />
            //   {mapItemsOnCart}
            // </div>
            <div>
              <Typography gutterBottom variant="h6" color="primary">
                {states.restaurantDetail?.restaurant.name}
              </Typography>
              <Typography size="small" color="secondary">
                <p>{states.restaurantDetail?.restaurant.address}</p>
                <p>{states.restaurantDetail?.restaurant.deliveryTime} min</p>
              </Typography>
            </div>
          ) : (
            <EmptyCartP>Carrinho vazio</EmptyCartP>
          )}
          <Container>
            {/* Subtotal */}
            <Delivery>
              Frete R$
              {states.cart.length
                ? states.restaurantDetail?.restaurant.shipping.toFixed(2)
                : "0,00"}
            </Delivery>
            <Subtotal>
              <p>SUBTOTAL</p>{" "}
              <Typography color="primary">
                <b>R${totalPrice.toFixed(2)}</b>
              </Typography>
            </Subtotal>
            {/* Formas de pagamento  */}
            <div>
              <PaymentMethods>Formas de pagamento</PaymentMethods>
              <hr />
              <Radio
                checked={method === "creditcard" ? true : false}
                onClick={() => onClickCreditCard()}
              />{" "}
              Cartão de crédito
              <br />
              <Radio
                checked={method === "money" ? true : false}
                onClick={() => onClickMoney()}
              />{" "}
              Dinheiro
            </div>

            {/* botão para enviar requisição */}
            {states.cart.length !== 0 ? (
              <ButtonConfirm
                onClick={() => onClickPlaceOrder()}
                type={"submit"}
                variant={"contained"}
                color={"primary"}
                margin={"normal"}
                fullWidth
              >
                Confimar
              </ButtonConfirm>
            ) : (
              <ButtonConfirm
                onClick={() => onClickPlaceOrder()}
                type={"submit"}
                variant={"contained"}
                color={"primary"}
                margin={"normal"}
                fullWidth
                disabled
              >
                Confimar
              </ButtonConfirm>
            )}
            {/* <ButtonConfirm
                onClick={() => onClickPlaceOrder()}
                type={"submit"}
                variant={"contained"}
                color={"primary"}
                margin={"normal"}
                fullWidth
              >
                {" "}
                Confimar{" "}
              </ButtonConfirm> */}
          </Container>
        </>
      ) : (
        <Loading />
      )}

      <Footer page="cart" />
    </div>
  );
}

export default CartPage;
