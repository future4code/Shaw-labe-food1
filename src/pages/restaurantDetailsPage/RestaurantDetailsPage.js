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
  const [product, setProduct] = useState()
  console.log(product)
  const handleClose = () => { setOpen(false) }

  const restaurantProducts = states.restaurantDetail?.restaurant.products
    .map((product) => {
      if (product.category !== "Bebida") {
        return <ProductCard setProduct={setProduct} key={product.id} params={params.restaurantId} product={product} quantity={quantity} setOpen={setOpen} />
      }
    })

  const restaurantDrinks = states.restaurantDetail?.restaurant.products
    .map((product) => {
      if (product.category === "Bebida") {
        return <ProductCard setProduct={setProduct} key={product.id} params={params.restaurantId} product={product} quantity={quantity} setOpen={setOpen} />
      }
    })

  useEffect(() => {
    requests.getRestaurantDetail(params.restaurantId);
    setters.setHeaderText("Restaurante");
    setters.setHeaderButton(<ArrowBackIos />);
  }, []);





  const addProduct = (product, params) => {
    if (states.restaurantId === params || states.restaurantId === undefined || states.cart.length === 0) {
      const newCart = [...states.cart, { ...product, quantity: 1 }]
      setters.setRestaurantId(params)
      setters.setCart(newCart)
      setters.setUpdate(states.update + 1)
      // setters.setProductQuantity(props.quantity)
    } else {
      alert("só pode adicionar 1 restaurante no carrinho")
    }
  }


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


          {/* //------------------------------------// */} {/* //------------------------------------// */}


          <hr />
          {restaurantProducts}

          <Title>Bebidas</Title>
          <hr />
          {restaurantDrinks}


          {/* //------------------------------------// */} {/* //------------------------------------// */}

        </ContainerCardDetail>
        :
        <Loading />
      }

      <ShowModal
        product={product}
        params={params.restaurantId}
        addProduct={addProduct}
        open={open}
        handleClose={handleClose}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}

export default RestaurantDetailsPage;
