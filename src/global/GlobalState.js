import React, { useState, useEffect } from 'react'
import { GlobalContext } from './GlobalContext'
import useRequestData from '../hooks/useRequestData'
import { BASE_URL, headers } from "../constants/urls"
import axios from 'axios'

export default function GlobalState(props) {

    //-- Estados & Setters --//
    const [profile, setProfile] = useState()
    const [orders, setOrders] = useState()
    // const [update, setUpdate] = useState(0)
    // const [address, setAddress] = useState()

    //-- requests --//
    // const getFullAddress = () => {
    //     axios
    //         .get(`${BASE_URL}profile/address`, headers)
    //         .then((res) => {
    //             setAddress(res.data)
    //         })
    //         .catch((err) => {
    //             console.log('Deu ruim: ', err.response.data)
    //         })
    // }
    const getProfile = () => {
        axios
            .get(`${BASE_URL}profile`, headers)
            .then((res) => {
                setProfile(res.data)
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

    const states = { profile, orders }
    const setters = { setProfile, setOrders }
    const requests = { getProfile, getOrdersHistory }

    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}