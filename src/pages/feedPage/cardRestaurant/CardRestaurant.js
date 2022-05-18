import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../../routes/coordinator";
import React from "react";

const CardRestaurant = (props) => {
  const navigate = useNavigate();

  const onClickCard = (id) => {
    goToDetailsPage(navigate, id);
  };

  return (
    <Card key={props.filtered.id}>
      <CardActionArea onClick={() => onClickCard(props.filtered.id)}>
        <CardMedia
          component="img"
          alt="logo da loja"
          height="140"
          image={props.filtered.logoUrl}
          title="Nome da loja"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" color="primary">
            {props.filtered.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography size="small" color="secondary">
          {props.filtered.deliveryTime} min.
        </Typography>
        <Typography size="small" color="secondary">
          Frete R$ {props.filtered.shipping},00
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CardRestaurant;
