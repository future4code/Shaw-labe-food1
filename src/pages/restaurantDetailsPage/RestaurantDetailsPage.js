import { CardActionArea, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import { ProductCard } from "./productCard/ProductCard";
import {
  CardMediaImg,
  ContainerCardDetail,
  TypographyNameDetail,
} from "./productCard/styled";

function RestaurantDetailsPage() {
  const { states, requests, setters } = useContext(GlobalContext);
  const params = useParams();

  const restaurantProducts = states.restaurantDetail?.restaurant.products.map(
    (product) => {
      return <ProductCard params={params.restaurantId} key={product.id} product={product} />;
    }
  );

  useEffect(() => {
    requests.getRestaurantDetail(params.restaurantId);
    setters.setHeaderText("Restaurante");
    setters.setHeaderButton("<");
  }, [states.update]);

  console.log(states.cart)
  return (
    <div>
      <Header />

      <ContainerCardDetail>
        <CardActionArea>
          <CardMediaImg
            component="img"
            alt="logo da loja"
            height="150"
            image={states.restaurantDetail?.restaurant.logoUrl}
            title="Nome da loja"
          />
          <br />
          <TypographyNameDetail gutterBottom variant="h6" color="primary">
            {states.restaurantDetail?.restaurant.name}
          </TypographyNameDetail>
          <Typography size="small" color="secondary">
            <p>{states.restaurantDetail?.restaurant.category}</p>
            <p>{states.restaurantDetail?.restaurant.deliveryTime} min</p>
            <p>Frete R${states.restaurantDetail?.restaurant.shipping.toFixed(2)}</p>
            <p>{states.restaurantDetail?.restaurant.address}</p>
          </Typography>
        </CardActionArea>
        <h3>Principais</h3>
        <hr />
        {restaurantProducts}
      </ContainerCardDetail>
    </div>
  );
}

export default RestaurantDetailsPage;
