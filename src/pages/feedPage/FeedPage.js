import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import CardRestaurant from "./cardRestaurant/CardRestaurant";
import useForm from "../../hooks/useForm";
import { DivFeed, FilterName } from "./styled";
import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

function FeedPage() {
  const { states, requests, setters } = useContext(GlobalContext);
  const { form, onChange } = useForm({ search: "" });
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const layane = () => {
    const getFilteredList = states.restaurants?.restaurants
      .filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(form.search.toLowerCase());
      })
      .map((filtered) => {
        return <CardRestaurant filtered={filtered} key={filtered.id} />;
      });

    setFilterRestaurant(getFilteredList)
  }

  const filterCategory = (category) => {
    const filteredRestaurant = states.restaurants?.restaurants.filter((restaurant) => {
      return restaurant.category === category
    }).map((filtered) => {
      return <CardRestaurant filtered={filtered} key={filtered.id} />
    })
    setFilterRestaurant(filteredRestaurant)
  }

  const getFilterCategory = states.restaurants?.restaurants.map((restaurant) => {
    return (
      <Tab  label={restaurant.category} key={restaurant.id} onClick={() => filterCategory(restaurant.category)}>
        {restaurant.category}
      </Tab>
    )
  })

  const reset = () => {
    console.log(filterRestaurant)
    setFilterRestaurant(requests.getRestaurants())
  }

  useEffect(() => {
    requests.getRestaurants();
    setters.setHeaderText("Rappi4")
    setters.setHeaderButton("")
  }, []);

  useEffect(() => {
    layane()
  }, [form, states.restaurants])

  return (
    <div>
      <Header />

      <DivFeed>
        <TextField placeholder="Buscar Restaurantes"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="disabled" />
              </InputAdornment>
            ),
          }}
          onChange={onChange}
          value={form.search}
          name={"search"}
          fullWidth 
        />
        <Paper square>
          <FilterName
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="disabled tabs example"
          >
            <Tab label="Todos" onClick={reset}/>
            {getFilterCategory}
          </FilterName>
        </Paper>

        {filterRestaurant}
      </DivFeed>

      <Footer page='home' />
    </div>
  );
}

export default FeedPage;