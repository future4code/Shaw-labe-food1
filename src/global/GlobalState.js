import React, { useState } from 'react'
import { GlobalContext } from './GlobalContext'
import { BASE_URL } from "../constants/urls"
import axios from 'axios'

export default function GlobalState(props) {

    //-- Estados & Setters --//
    const [profile, setProfile] = useState()
    const [orders, setOrders] = useState()
    const [address, setAddress] = useState()
    const [restaurantDetail, setRestaurantDetail] = useState()
    const [restaurants, setRestaurants] = useState()
    const [update, setUpdate] = useState(0)
    const [activeOrder, setActiveOrder] = useState(null)

    //-- CARRINHO --//
    const [cart, setCart] = useState([])
    const [restaurantId, setRestaurantId] = useState({})
    const [productQuantity, setProductQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    //-- HEADER --//
    const [headerText, setHeaderText] = useState("")
    const [headerButton, setHeaderButton] = useState("<")

    //-- requests --//
    const getFullAddress = () => {
        axios.get(`${BASE_URL}profile/address`, { headers: { auth: localStorage.getItem("tokenadress") } })
            .then((res) => {
                setAddress(res.data)
            })
            .catch((err) => {
                console.log('Deu ruim: ', err.response.data)
            })
    }

    const getProfile = async () => {
        await axios.get(`${BASE_URL}profile`, { headers: { auth: localStorage.getItem("tokenadress") } })
            .then((res) => {
                setProfile(res.data)
            })
            .catch((err) => {
                console.log('Deu ruim: ', err.response.data)
            })
    }

    const getRestaurants = () => {
        axios.get(`${BASE_URL}restaurants`, { headers: { auth: localStorage.getItem("tokenadress") } })
            .then((res) => {
                setRestaurants(res.data)
            })
            .catch((err) => {
                console.log('Deu ruim: ', err.response.data)
            })
    }

    const getOrdersHistory = () => {
        axios.get(`${BASE_URL}orders/history`, { headers: { auth: localStorage.getItem("tokenadress") } })
            .then((res) => {
                setOrders(res.data)
            })
            .catch((err) => {
                console.log('Deu ruim: ', err.response.data)
            })
    }

    const getRestaurantDetail = async (restaurantId) => {
        await axios.get(`${BASE_URL}restaurants/${restaurantId}`, { headers: { auth: localStorage.getItem("tokenadress") } })
            .then((res) => {
                setRestaurantDetail(res.data)
            })
            .catch((err) => {
                console.log('Deu ruim: ', err.response.data)
            })
    }

    const postPlaceOrder = async (restaurantId, body) => {
        await axios.get(`${BASE_URL}restaurants/${restaurantId}/order`, body, { headers: { auth: localStorage.getItem("tokenadress") } })
            .then((res) => {
                console.log("Seu pedido foi enviado ao restaurante")
            })
            .catch((err) => {
                console.log('Deu ruim: ', err.response.data)
            })
    }

    const getActiveOrder = () => {
        axios.get(`${BASE_URL}active-order`, { headers: { auth: localStorage.getItem("tokenadress") } })
            .then((res) => {
                setActiveOrder(res.data)
            })
            .catch((err) => {
                console.log(err.data)
            })
    }

    //-- Functions --//
    const removeProduct = (product) => {
        const newCart = states.cart.map((item) => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        }).filter((item) => {
            if (item.quantity === 0) {
                setProductQuantity(0)
            }
            return item.quantity > 0
        })

        setters.setCart(newCart)
    }

    //-- Constantes para organização --//
    const states = { profile, restaurantId, orders, address, restaurants, headerText, headerButton, update, restaurantDetail, cart, totalPrice, productQuantity, activeOrder }

    const setters = { setProfile, setRestaurantId, setOrders, setHeaderText, setHeaderButton, setUpdate, setCart, setTotalPrice, setProductQuantity, setActiveOrder }

    const requests = { postPlaceOrder, getProfile, getOrdersHistory, getFullAddress, getRestaurantDetail, getRestaurants, getActiveOrder }

    const functions = { removeProduct }

    return (
        <GlobalContext.Provider value={{ states, setters, requests, functions }}>
            {props.children}
        </GlobalContext.Provider>
    )
}