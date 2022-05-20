import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../global/GlobalContext";
import {
  ButtonAdd,
  CardInfoMeal,
  CardMediaItemImg,
  Container,
  Quantity,
  Select,
} from "./styled";

export const ProductCard = (props) => {
  
  const { states, setters } = useContext(GlobalContext)
  const [productQuantity, setProductQuantity] = useState(0)

  //-- Adicionar produto --//
  const addProduct = () => {
      // const newCart = [...states.cart, { ...product, quantity: 1 }]
      // setters.setRestaurantId(props.params)
      // setters.setCart(newCart)
      // setters.setUpdate(states.update + 1)
      // setProductQuantity(props.quantity)
      // setProductQuantity(1)
      props.setOpen(true)
  }

  //-- Alterar quantidade dos produtos --//
  const onChangeQuantity = (e) => {
    const newQuantity = states.cart.map((item) => {
        if (item.id === props.product.id) {
          setters.setUpdate(states.update + 1)
          setProductQuantity(e.target.value)
          return {...item, quantity: Number(e.target.value)}
        }
        return item
    })
    
    setters.setCart(newQuantity)
  }

  //-- Adicionar produto --//
  const addProduct = (product) => {
    if (states.restaurantId === props.params || states.restaurantId === undefined || states.cart.length === 0) {
      const newCart = [...states.cart, { ...product, quantity: 1 }]
      setters.setRestaurantId(props.params)
      setters.setCart(newCart)
      setters.setUpdate(states.update + 1)
      setProductQuantity(1)
    } else {
      alert("só pode adicionar 1 restaurante no carrinho")
    }
  }

  //-- Alterar quantidade dos produtos --//
  const onChangeQuantity = (e) => {
    const newQuantity = states.cart.map((item) => {
      if (item.id === props.product.id) {
        setters.setUpdate(states.update + 1)
        setProductQuantity(e.target.value)
        return { ...item, quantity: Number(e.target.value) }
      }
      return item
    })
    setters.setCart(newQuantity)
  }

  //-- Remover produtos do carrinho --//
  const removeProduct = (product) => {
    const newCart = states.cart.map((item) => {
      if (item.id === product.id) {
        setProductQuantity(productQuantity - 1)
        return {
          ...item, quantity: item.quantity - 1
        }
      }
      return item
    }).filter((item) => {
      if (item.quantity === 0) {
        setProductQuantity(0)
      }
      return item.quantity > 0
    })
    setters.setUpdate(states.update + 1)
    setters.setCart(newCart)
  }
  
  useEffect(() => {
    setProductQuantity(props.quantity)
  }, [])

  return (
    <div>
      <Container>
        <CardMediaItemImg src={props.product.photoUrl} />
        <CardInfoMeal>
          {props.product.name}
          <br />
          {props.product.description}
          <br />
          R${props.product.price.toFixed(2)}
        </CardInfoMeal>

        <ButtonAdd>
          <button
            onClick={
              // () => console.log(productQuantity)
              () => {
                productQuantity === 0
                  // ? () => addProduct(props.product)
                  ? addProduct()
                  : removeProduct(props.product)
              }
              }
          >
            {productQuantity === 0 ? "adicionar" : "remover"}
          </button>
        </ButtonAdd>

        <Quantity>
          {productQuantity !== 0 ? <div>{productQuantity}</div> : ""}
        </Quantity>
      </Container>
    </div>
  );
};
