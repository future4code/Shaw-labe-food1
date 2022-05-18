import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import CardRestaurant from "./cardRestaurant/CardRestaurant";
import useForm from "../../hooks/useForm"
import Header from "../../components/header/Header";

function FeedPage() {

  const { states, requests, setters } = useContext(GlobalContext);
  const {form, onChange} = useForm({ search: ""})

  const getFilteredList = states.restaurants?.restaurants.filter((restaurant) => {
    return (
      restaurant.name.toLowerCase().includes(form.search.toLowerCase())
    )
  }).map((filtered) => {
    return <CardRestaurant filtered={filtered} key={filtered.id}/>
  })
  console.log(getFilteredList)

  useEffect(() => {
    requests.getRestaurants();
    setters.setHeaderText("Rappi4")
    setters.setHeaderButton("")
  }, []);

  return (
    <div>
      <Header />
      <input placeholder="Buscar Restaurantes"
        onChange={onChange}
        value={form.search}
        name={"search"}
      />

      {getFilteredList}
    </div>
  );
}

export default FeedPage;