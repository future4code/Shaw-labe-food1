import { Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../global/GlobalContext";
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
  const [quantity, setQuantity] = useState(0)

  //-- Adicionar produto --//
  const addProduct = (product) => {
    if (states.restaurantId === props.params || states.restaurantId === undefined || states.cart.length === 0) {
      props.setOpen(true)
      props.setProduct(product.quantity)
      setters.setCart([...states.cart, { ...product, quantity: 1 }])
      //   setters.setRestaurantId(props.params)
      //   setters.setCart(newCart)
      //   setters.setUpdate(states.update + 1)
      // setters.setProductQuantity(props.quantity)
    } else {
      alert("só pode adicionar 1 restaurante no carrinho");
    }
  };


  const returnQuantity = (product) => {
    const newQuantity = states.cart.filter((item) => {
      if (item.id === product.id) { setQuantity(item.quantity) } else { return false }
    })
    return newQuantity
  }



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
  console.log(states.cart)


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

  useEffect(() => {
    setters.setProductQuantity(props.quantity)
  }, [])


  return (
    <div>
      <Container>
        <CardMediaItemImg src={props.product.photoUrl} />
        <CardInfoMeal>
          <RestaurantName gutterBottom  variant="p" color="primary">{props.product.name}</RestaurantName>
          <br />
          <Description>{props.product.description}</Description>
          <br />
         <Price> R${props.product.price.toFixed(2)}</Price>
        </CardInfoMeal>

        <div>
          {productQuantity === 0 ? (
            <ButtonAdd
              onClick={
                // () => console.log(productQuantity)
                () => {
                  productQuantity === 0
                    ? // ? () => addProduct(props.product)
                      addProduct()
                    : removeProduct(props.product);
                }
              }
            >
              adicionar
            </ButtonAdd>
          ) : (
            <ButtonRemove
              onClick={
                // () => console.log(productQuantity)
                () => {
                  productQuantity === 0
                    ? // ? () => addProduct(props.product)
                      addProduct()
                    : removeProduct(props.product);
                }
              }
            >
              remover
            </ButtonRemove>
          )}
        </div>
        <div>
          {productQuantity !== 0 ? <Quantity>{productQuantity}</Quantity> : ""}
        </div>

      </Container>
    </div>
  );
};
