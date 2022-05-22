import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import CardRestaurant from "./cardRestaurant/CardRestaurant";
import useForm from "../../hooks/useForm";
import { DivFeed, FilterName, SearchMessage } from "./styled";
import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Loading from '../../components/Loading/Loading'
import useProtectdPage from "../../hooks/useProtectedPage"
import ActiveOrderCard from "../../components/activeOrderCard/ActiveOrderCard";

function FeedPage() {
  
  useProtectdPage()
  const { states, requests, setters } = useContext(GlobalContext);
  const { form, onChange, clear } = useForm({ search: "" });
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    form.search = ""
    setters.setHeaderText("Rappi4")
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


  const onClickSearch = () => {
    setFilterRestaurant(<SearchMessage>Busque por nome de restaurante</SearchMessage>)
    setters.setHeaderText("Busca")
  }

  const reset = () => {
    setFilterRestaurant(requests.getRestaurants())
    clear()
  }

  useEffect(() => {
    requests.getRestaurants();
    setters.setHeaderText("Rappi4")
    setters.setHeaderButton("")
    requests.getActiveOrder()
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
          onClick={onClickSearch}
          onChange={onChange}
          value={form.search}
          name={"search"}
          fullWidth
        />

        {filterRestaurant
          ?
          <>
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
            <>
              {!filterRestaurant.length && filterRestaurant.key !== null ? 
                <SearchMessage>Não encontramos :(</SearchMessage> 
                : 
                filterRestaurant
              }
            </>
          </>
          :
          <Loading />
        }
      </DivFeed>
      
      {states.activeOrder?.order && <ActiveOrderCard/>}
      
      <Footer page='home' />
    </div>
  );
}

export default FeedPage;