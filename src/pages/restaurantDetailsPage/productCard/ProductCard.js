import React, { useContext, useState } from "react";
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
    const addProduct = (product) => {
        const newCart = [...states.cart, { ...product, quantity: 1 }]
        setters.setRestaurantId(props.params)
        setters.setCart(newCart)
        setters.setUpdate(states.update + 1)
        setProductQuantity(1)
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
              productQuantity === 0
                ? () => addProduct(props.product)
                : () => removeProduct(props.product)
            }
          >
            {productQuantity === 0 ? "adicionar" : "remover"}
          </button>
        </ButtonAdd>

        <div>
          {productQuantity > 0 ? (
            <Select>
              <select onChange={onChangeQuantity}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
            </Select>
          ) : (
            ""
          )}
        </div>
        <Quantity>
          {productQuantity !== 0 ? <div>{productQuantity}</div> : ""}
        </Quantity>
      </Container>
    </div>
  );
};
