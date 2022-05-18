import React, { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import { ProductCard } from "./productCard/ProductCard";

function RestaurantDetailsPage() {
  // const navigate = useNavigate()
  const { states, requests, setters } = useContext(GlobalContext);
  const params = useParams();

  const restaurantProducts = states.restaurantDetail?.restaurant.products.map((product) => {
    return <ProductCard key={product.id} product={product} />
  })



  useEffect(() => {
    requests.getRestaurantDetail(params.restaurantId)
    setters.setHeaderText("Restaurante")
    setters.setHeaderButton("<")
  }, []);

  return (
    <div>
      <Header />
      <div>
        <img src={states.restaurantDetail?.restaurant.logoUrl} />
        <br />
        {states.restaurantDetail?.restaurant.name}
        <br />
        {states.restaurantDetail?.restaurant.category}
        <br />
        {states.restaurantDetail?.restaurant.deliveryTime} min
        <br />
        Frete R${states.restaurantDetail?.restaurant.shipping.toFixed(2)}
        <br />
        {states.restaurantDetail?.restaurant.address}
      </div>
      <div>
        {restaurantProducts}
      </div>
    </div>
  )
}

export default RestaurantDetailsPage;