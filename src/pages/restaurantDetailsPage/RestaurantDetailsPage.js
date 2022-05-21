import { CardActionArea, Typography } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import { ProductCard } from "./productCard/ProductCard";
import { P, CardMediaImg, ContainerCardDetail, Title } from "./styled";
import Loading from '../../components/Loading/Loading'
import ShowModal from "./modal/Modal";
import useProtectdPage from "../../hooks/useProtectedPage"


function RestaurantDetailsPage() {
  useProtectdPage()

  const params = useParams();
  const { states, requests, setters } = useContext(GlobalContext);
  const [open, setOpen] = useState(false)
  const [quantity, setQuantity] = useState(0)

  const handleClose = () => { setOpen(false) }

  const addProduct = (product) => {
    const newCart = [...states.cart, { ...product, quantity: quantity }]
    setters.setRestaurantId(params.id)
    setters.setCart(newCart)
    setters.setUpdate(states.update + 1)
    // desenvolver a lógica para a tela de restaurente.
  }

  const restaurantProducts = states.restaurantDetail?.restaurant.products
    .map((product) => {
      if (product.category !== "Bebida") {
        return <ProductCard params={params.restaurantId} key={product.id} product={product} quantity={quantity} setOpen={setOpen} />
      }
    })

  const restaurantDrinks = states.restaurantDetail?.restaurant.products
    .map((product) => {
      if (product.category === "Bebida") {
        return <ProductCard key={product.id} params={params.restaurantId} product={product} quantity={quantity} setOpen={setOpen} />
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

            <Typography gutterBottom variant="h6" color="primary">
              {states.restaurantDetail?.restaurant.name}
            </Typography>

            <Typography size="small" color="secondary">
              <p>{states.restaurantDetail?.restaurant.category}</p>
              <P>{states.restaurantDetail?.restaurant.deliveryTime} min <p>Frete R${states.restaurantDetail?.restaurant.shipping.toFixed(2)}</p></P>
              <p></p>
              <p>{states.restaurantDetail?.restaurant.address}</p>
            </Typography>
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

      <ShowModal
        open={open}
        handleClose={handleClose}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}

export default RestaurantDetailsPage;
