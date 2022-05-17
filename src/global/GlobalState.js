import React, { useState, useEffect } from 'react'
import { GlobalContext } from './GlobalContext'
import useRequestData from '../hooks/useRequestData'
import { BASE_URL, headers, headersAddress } from "../constants/urls"
import axios from 'axios'

export default function GlobalState(props) {

    //-- Estados & Setters --//
    const [profile, setProfile] = useState()
    const [orders, setOrders] = useState()
    const [update, setUpdate] = useState(0)
    const [address, setAddress] = useState()
    const [restaurants, setRestaurants] = useState()

    //-- requests --//
    const getFullAddress = () => {
        axios
            .get(`${BASE_URL}profile/address`, headersAddress)
            .then((res) => {
                setAddress(res.data)
            })
            .catch((err) => {
                console.log('Deu ruim: ', err.response.data)
            })
    }

    const getProfile = async () => {
        await axios
            .get(`${BASE_URL}profile`, headersAddress)
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
            .get(`${BASE_URL}orders/history`, headers)
            .then((res) => {
                setOrders(res.data)
            })
            .catch((err) => {
                console.log('Deu ruim: ', err.response.data)
            })
    }

    const states = { profile, orders, update, address, restaurants }
    const setters = { setProfile, setOrders, setUpdate }
    const requests = { getProfile, getOrdersHistory, getFullAddress, getRestaurants }

    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}