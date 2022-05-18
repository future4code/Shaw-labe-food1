import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { GlobalContext } from "../../global/GlobalContext";

function RestaurantDetailsPage () {

  const navigate = useNavigate()
  const { states, requests, setters } = useContext(GlobalContext);

  useEffect(() => {
    setters.setHeaderText("Restaurante")
    setters.setHeaderButton("<")
  }, []);

  return (
    <div>
      <Header />
      Details Restaurant
    </div>
  )
}

export default RestaurantDetailsPage;