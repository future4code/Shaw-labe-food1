import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../../routes/coordinator";
import React from "react";
import {
  ContainerCard,
  CardMediaImg,
  CardActionsInfo,
  TypographyName,
} from "./styled";

const CardRestaurant = (props) => {

  const navigate = useNavigate();

  const onClickCard = (id) => {
    goToDetailsPage(navigate, id);
  };

  return (
    <ContainerCard key={props.filtered.id}>
      <CardActionArea onClick={() => onClickCard(props.filtered.id)}>
        <CardMediaImg
          component="img"
          alt="logo da loja"
          height="140"
          image={props.filtered.logoUrl}
          title="Nome da loja"
        />

        <TypographyName gutterBottom variant="h6" color="primary">
          {props.filtered.name}
        </TypographyName>
      </CardActionArea>

      <CardActionsInfo>
        <Typography size="small" color="secondary">
          {props.filtered.deliveryTime} min.
        </Typography>

        <Typography size="small" color="secondary">
          Frete R$ {props.filtered.shipping},00
        </Typography>
      </CardActionsInfo>
    </ContainerCard>
  );
};

export default CardRestaurant;
