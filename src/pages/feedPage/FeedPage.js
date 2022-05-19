import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import CardRestaurant from "./cardRestaurant/CardRestaurant";
import useForm from "../../hooks/useForm";
import {restaurantCategory} from "../../constants/categorys"

function FeedPage() {
  const { states, requests } = useContext(GlobalContext);
  const { form, onChange } = useForm({ search: "" });
  const [filterRestaurant, setFilterRestaurant] = useState([])


  const getFilteredList = states.restaurants?.restaurants
    .filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(form.search.toLowerCase());
    })
    .map((filtered) => {
      return <CardRestaurant filtered={filtered} key={filtered.id} />;
    });
    // const teste = () => {
    //   const getFilteredList = states.restaurants?.restaurants
    //   .filter((restaurant) => {
    //     return restaurant.name.toLowerCase().includes(form.search.toLowerCase());
    //   })
    //   .map((filtered) => {
    //     return <CardRestaurant filtered={filtered} key={filtered.id} />;
    //   });
    //   setFilterRestaurant(getFilteredList)
    // }

    
  const filterCategory = (category) => {
     const filteredRestaurant = states.restaurants?.restaurants.filter((restaurant) =>{
      return restaurant.category === category
    }).map((filtered) =>{
      return <CardRestaurant filtered={filtered} key={filtered.id} />
    })

    setFilterRestaurant(filteredRestaurant)
  }

  const getFilterCategory = states.restaurants?.restaurants.map((restaurant) =>{
    return (
      <h4 onClick={() => filterCategory(restaurant.category)} key={restaurant.id}>{restaurant.category}</h4>
    )
  })


  
  useEffect(() => {
    requests.getRestaurants();
  }, []);

  return (
    <div>
      <input
        placeholder="Buscar Restaurantes"
        onChange={onChange}
        value={form.search}
        name={"search"}
      />
      {filterRestaurant}
      {getFilterCategory}
      {getFilteredList}
      
    </div>
  );
}

export default FeedPage;
