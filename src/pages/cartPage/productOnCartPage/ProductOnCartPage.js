import React, { useContext } from "react";
import { GlobalContext } from "../../../global/GlobalContext";
import {
  ButtonRemove,
  CardInfoMeal,
  CardMediaItemImg,
  Container,
  Description,
  Price,
  ProductName,
  Quantity,
} from "./styled";

export const ProductOnCartPage = (props) => {
  const { functions } = useContext(GlobalContext);

  return (
    <div>
      {/* <div>
        {" "}
        <img
          src={props.item.photoUrl}
          alt={"imagem do alimento ou bebida"}
        />{" "}
      </div>

      <div>
        {props.item.name}
        <br />
        {props.item.description}
        <br />
        R${props.item.price.toFixed(2)}
      </div>

      <div> {props.item.quantity} </div>

      <div>
        <button onClick={() => functions.removeProduct(props.item)}>
          remover
        </button>
      </div> */}
      <div>
        <Container>
          <CardMediaItemImg  src={props.item.photoUrl}
          alt={"imagem do alimento ou bebida"} />
          <CardInfoMeal>
            <ProductName gutterBottom variant="p" color="primary">
            {props.item.name}
            </ProductName>
            <Description>{props.item.description}</Description>
            <Price>
              {" "}
              <b>R${props.item.price.toFixed(2)}</b>
            </Price>
          </CardInfoMeal>
          <div>
            <ButtonRemove onClick={() => functions.removeProduct(props.item)}>
              remover
            </ButtonRemove>
          </div>
          <Quantity> {props.item.quantity} </Quantity>
        </Container>
      </div>
    </div>
  );
};
