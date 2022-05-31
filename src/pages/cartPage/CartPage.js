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
  ButtonDisabled,
  ContainerSummary,
  Data,
  Delivery,
  EmptyCartP,
  PaymentMethods,
  PurchasesCartDiv,
  Subtotal,
  DivCart
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
        <DivCart>
          <AddressData>
            <Data>
              <h4>Endereço de entrega</h4>
              <p>
                {states.address?.address.street},{" "}
                {states.address?.address.number}
              </p>
            </Data>
          </AddressData>

          {states.cart.length ? (
            <PurchasesCartDiv>
              <Typography variant="h6" color="primary">
                {states.restaurantDetail?.restaurant.name}
              </Typography>
              <Typography size="small" color="secondary">
                <p>{states.restaurantDetail?.restaurant.address}</p>
              </Typography>
              <Typography size="small" color="secondary">
                <p>{states.restaurantDetail?.restaurant.deliveryTime} min</p>
              </Typography>
              {mapItemsOnCart}  
            </PurchasesCartDiv>
          ) : (
            <EmptyCartP> Carrinho vazio </EmptyCartP>
          )}

          <ContainerSummary>
            <Delivery>
              <b>
                Frete R$
                {states.cart.length ? 
                  states.restaurantDetail?.restaurant.shipping.toFixed(2)
                  : 
                  "0,00"
                }
              </b>
            </Delivery>
            
            <Subtotal>
              <b>SUBTOTAL</b>
              <Typography color="primary">
                <b>R${totalPrice.toFixed(2)}</b>
              </Typography>
            </Subtotal>
            
            <div>
              <PaymentMethods> Forma de pagamento </PaymentMethods>
              <hr />

              <Radio
                color="black"
                checked={method === "creditcard" ? true : false}
                onClick={() => onClickCreditCard()}
              /> Cartão de crédito
              <br />
              <Radio
                color="black"
                checked={method === "money" ? true : false}
                onClick={() => onClickMoney()}
              /> Dinheiro
            </div>
          </ContainerSummary>
          
          {states.cart.length !== 0 ? (
            <ButtonConfirm
              onClick={() => onClickPlaceOrder()}
              type={"submit"}
            >
              Confirmar
            </ButtonConfirm>
          ) : (
            <ButtonDisabled>
              Confirmar
            </ButtonDisabled>
          )}
        </DivCart>
      ) : (
        <Loading />
      )}

      <Footer page="cart" />
    </div>
  );
}

export default CartPage;
