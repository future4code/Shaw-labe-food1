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
import Loading from '../../components/Loading/Loading'

function FeedPage() {
  const { states, requests, setters } = useContext(GlobalContext);
  const { form, onChange } = useForm({ search: "" });
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getFilterName = () => {
    const filteredName = states.restaurants?.restaurants
      .filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(form.search.toLowerCase());
      })
      .map((filtered) => {
        return <CardRestaurant filtered={filtered} key={filtered.id} />;
      });

    setFilterRestaurant(filteredName)
  }

  const getFilterCategory = (category) => {
    const filteredCategory = states.restaurants?.restaurants
      .filter((restaurant) => {
        return restaurant.category === category
      }).map((filtered) => {
        return <CardRestaurant filtered={filtered} key={filtered.id} />
      })

    setFilterRestaurant(filteredCategory)
  }

  const showCategories = states.restaurants?.restaurants.map((restaurant) => {
    return (
      <Tab label={restaurant.category} key={restaurant.id} onClick={() => getFilterCategory(restaurant.category)}>
        {restaurant.category}
      </Tab>
    )
  })

  const reset = () => {
    setFilterRestaurant(requests.getRestaurants())
  }

  useEffect(() => {
    requests.getRestaurants();
    setters.setHeaderText("Rappi4")
    setters.setHeaderButton("")
  }, [])

  useEffect(() => {
    getFilterName()
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
            <Tab label="Todos" onClick={reset} />
            {showCategories}
          </FilterName>
        </Paper>

        {filterRestaurant ? filterRestaurant : <Loading />}
      </DivFeed>

      <Footer page='home' />
    </div>
  );
}

export default FeedPage;