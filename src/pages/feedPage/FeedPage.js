import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import CardRestaurant from "./cardRestaurant/CardRestaurant";
import useForm from "../../hooks/useForm"


function FeedPage() {
  const { states, requests } = useContext(GlobalContext);
  const {form, onChange} = useForm({ search: ""})

  // const filterRestaurants = states.restaurants?.filter((restaurant) =>{
  //   return restaurant.name.includes(form.change)
  // })
  
  // const [query, setQuery] = useState("") 

  // onChangeQuery = (e) => {
  //       setQuery(e.target.value )
  //   }

  // getFilteredList = () => {
  //       return (states.restaurants
  //           .filter(restaurant => (restaurant.name.toLowerCase().includes(query.toLowerCase())))
  // )}

  useEffect(() => {
    requests.getRestaurants();
  }, []);

  console.log(states.restaurants)

  const mapRestaurants = states.restaurants?.restaurants.map((restaurant) => {
    return (
     <CardRestaurant
     restaurant={restaurant}
     />
    );
  });

  return (
    <div>
      <input 
      placeholder="Buscar Restaurantes"
      onChange={onChange}
      value={form.search}
      name={"search"}
      />
      {mapRestaurants}
    </div>
  );
}

export default FeedPage;
