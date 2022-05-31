import React, { useContext } from "react";
import { GlobalContext } from "../../../global/GlobalContext";
import {
  ButtonRemove,
  CardInfoMeal,
  CardMediaItemImg,
  Container,
  Description,
  Price,
  Quantity,
  RestaurantName,
} from "./styled";

export const ProductOnCartPage = (props) => {
  const { functions } = useContext(GlobalContext);

  return (
    <div>
      <Container>
        <CardMediaItemImg  src={props.item.photoUrl} alt={"imagem do alimento ou bebida"} />

        <CardInfoMeal>
          <RestaurantName> {props.item.name} </RestaurantName>
          <Description> {props.item.description} </Description>
          <Price> R${props.item.price.toFixed(2)} </Price>
        </CardInfoMeal>

        <div>
          <ButtonRemove onClick={() => functions.removeProduct(props.item)}>
            remover
          </ButtonRemove>
        </div>
        
        <div>
          <Quantity> {props.item.quantity} </Quantity>
        </div>
      </Container>
    </div>
  );
};
