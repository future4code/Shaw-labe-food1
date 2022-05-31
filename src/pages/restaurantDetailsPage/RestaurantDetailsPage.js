import { CardActionArea} from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import { ProductCard } from "./productCard/ProductCard";
import { P, CardMediaImg, ContainerCardDetail, Title, NameRestaurant, DivInfRestaurant } from "./styled";
import Loading from '../../components/Loading/Loading'
import useProtectdPage from "../../hooks/useProtectedPage"


function RestaurantDetailsPage() {
  useProtectdPage()
  const params = useParams();
  const { states, requests, setters } = useContext(GlobalContext);


  const restaurantProducts = states.restaurantDetail?.restaurant.products
    .map((product) => {
      if (product.category !== "Bebida") {
        return <ProductCard key={product.id} params={params.restaurantId} product={product} />
      }
    })

  const restaurantDrinks = states.restaurantDetail?.restaurant.products
    .map((product) => {
      if (product.category === "Bebida") {
        return <ProductCard key={product.id} params={params.restaurantId} product={product} />
      }
    })

  useEffect(() => {
    requests.getRestaurantDetail(params.restaurantId);
    setters.setHeaderText("Restaurante");
    setters.setHeaderButton(<ArrowBackIos />);
  }, []);

  return (
    <div>
      <Header />
      
      {states.restaurantDetail?.restaurant.logoUrl && restaurantProducts && restaurantDrinks
        ?
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

            <DivInfRestaurant>
              <NameRestaurant>{states.restaurantDetail?.restaurant.name}</NameRestaurant>
              <p>{states.restaurantDetail?.restaurant.category}</p>
              <P>
                {states.restaurantDetail?.restaurant.deliveryTime} min 
                <p>Frete R${states.restaurantDetail?.restaurant.shipping.toFixed(2)}</p>
              </P>
              <p>{states.restaurantDetail?.restaurant.address}</p>
            </DivInfRestaurant>
          </CardActionArea>

          <Title>Pratos principais</Title>
          <hr />
          {restaurantProducts}

          <Title>Bebidas</Title>
          <hr />
          {restaurantDrinks}
        </ContainerCardDetail>
        :
        <Loading />
      }
    </div>
  );
}

export default RestaurantDetailsPage;
