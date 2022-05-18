import React, { useState } from 'react'
import { GlobalContext } from './GlobalContext'
import { BASE_URL, headers, headersAddress } from "../constants/urls"
import axios from 'axios'

export default function GlobalState(props) {
    //-- Estados & Setters --//
    const [profile, setProfile] = useState()
    const [orders, setOrders] = useState()
    const [address, setAddress] = useState()
    const [restaurantDetail, setRestaurantDetail] = useState()
    const [restaurants, setRestaurants] = useState()
    
    const [headerText, setHeaderText] = useState("")
    const [headerButton, setHeaderButton] = useState("<")
    //-- requests --//
    const getFullAddress = () => {
        axios
            .get(`${BASE_URL}profile/address`, { headers: { auth: localStorage.getItem("tokenadress") } })
            .then((res) => {
                setAddress(res.data)
            })
            .catch((err) => {
                console.log('Deu ruim: ', err.response.data)
            })
    }
    const getProfile = async () => {
        await axios
            .get(`${BASE_URL}profile`, { headers: { auth: localStorage.getItem("tokenadress") } })
            .then((res) => {
                setProfile(res.data)
            })
            .catch((err) => {
                console.log('Deu ruim: ', err.response.data)
            })
    }
    const getRestaurants = () => {
        axios
            .get(`${BASE_URL}restaurants`, { headers: { auth: localStorage.getItem("tokenadress") } })
            .then((res) => {
                setRestaurants(res.data)
            })
            .catch((err) => {
                console.log('Deu ruim: ', err.response.data)
            })
    }
    const getOrdersHistory = () => {
        axios
            .get(`${BASE_URL}orders/history`, { headers: { auth: localStorage.getItem("tokenadress") } })
            .then((res) => {
                setOrders(res.data)
            })
            .catch((err) => {
                console.log('Deu ruim: ', err.response.data)
            })
    }
    const getRestaurantDetail = async (restaurantId) => {
        await axios
            .get(`${BASE_URL}restaurants/${restaurantId}`, { headers: { auth: localStorage.getItem("tokenadress") } })
            .then((res) => {
                setRestaurantDetail(res.data)
            })
            .catch((err) => {
                console.log('Deu ruim: ', err.response.data)
            })
    }

    const states = { profile, orders, address, restaurants, headerText, headerButton, restaurantDetail }
    const setters = { setProfile, setOrders, setHeaderText, setHeaderButton }
    const requests = { getProfile, getOrdersHistory, getFullAddress, getRestaurantDetail, getRestaurants }

    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}