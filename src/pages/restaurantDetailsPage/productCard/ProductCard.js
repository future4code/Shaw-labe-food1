import { Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../global/GlobalContext";
import ShowModal from "../modal/Modal";
import {
  ButtonRemove,
  CardInfoMeal,
  CardMediaItemImg,
  Container,
  Quantity,
  ButtonAdd,
  RestaurantName,
  Price,
  Description
} from "./styled";

export const ProductCard = (props) => {
  const { states, setters } = useContext(GlobalContext)
  const [productQuantity, setProductQuantity] = useState(0)
  const [open, setOpen] = useState(false)
  const handleClose = () => { setOpen(false) }

  //-- Adicionar produto --//
  const addProduct = (product) => {
    if (states.restaurantId === props.params || states.restaurantId === undefined || states.cart.length === 0) {
      setOpen(true)
    } else {
      alert("só pode adicionar 1 restaurante no carrinho");
    }
  };

  //-- Open Modal --//
  const openModal = () => {
    if (states.restaurantId === props.params || states.restaurantId === undefined || states.cart.length === 0) {
      setOpen(true)
    } else {
      alert("só pode adicionar 1 restaurante no carrinho");
    }
  };
  //-- Alterar quantidade dos produtos --//
  // const onChangeQuantity = (e) => {
  //   const newQuantity = states.cart.map((item) => {
  //     if (item.id === props.product.id) {
  //       setters.setUpdate(states.update + 1)
  //       setProductQuantity(e.target.value)
  //       return { ...item, quantity: Number(e.target.value) }
  //     }
  //     return item
  //   })
  //   setters.setCart(newQuantity)
  // }


  //-- Remover produtos do carrinho --//
  const removeProduct = (product) => {

    const newCart = states.cart.map((item) => {
      if (item.id === product.id) {
        setters.setProductQuantity(states.productQuantity - 1)
        return {
          ...item, quantity: item.quantity - 1
        }
      }
      return item
    }).filter((item) => {
      if (item.quantity === 0) {
        setters.setProductQuantity(0)
        return item.quantity > 0
      }
    })
    setters.setUpdate(states.update + 1)
    setters.setCart(newCart)
  }

  return (
    <div>
      <Container>
        <CardMediaItemImg src={props.product.photoUrl} alt={"imagem do alimento ou bebida"} />
        <CardInfoMeal>
          <RestaurantName gutterBottom variant="p" color="primary">{props.product.name}</RestaurantName>
          <br />
          <Description>{props.product.description}</Description>
          <br />
          <Price> R${props.product.price.toFixed(2)}</Price>
        </CardInfoMeal>

        <div>
          <ButtonAdd
            onClick={productQuantity === 0 ? () => openModal() : () => removeProduct(props.product)}
          >
            {productQuantity === 0 ? "adicionar" : "remover"}
          </ButtonAdd>
        </div>
        <div>
          {productQuantity !== 0 ? <Quantity>{productQuantity}</Quantity> : ""}
        </div>


        <ShowModal
          open={open}
          handleClose={handleClose}
        />

      </Container>
    </div>
  );
};
