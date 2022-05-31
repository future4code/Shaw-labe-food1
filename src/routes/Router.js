import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OpeningPage from "../pages/openingPage/OpeningPage";
import FeedPage from "../pages/feedPage/FeedPage"
import LoginPage from "../pages/loginPage/LoginPage"
import SignUpPage from "../pages/signUpPage/SignUpPage"
import AdressPage from "../pages/adressPage/AdressPage"
import RestaurantDetailsPage from "../pages/restaurantDetailsPage/RestaurantDetailsPage"
import CartPage from "../pages/cartPage/CartPage"
import ProfilePage from "../pages/profilePage/ProfilePage"
import UpDateProfile from "../pages/upDateProfile/UpDateProfile"
import ErrorPage from "../pages/errorPage/ErrorPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<OpeningPage />} />
                <Route path="/home" element={<FeedPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/endereco" element={<AdressPage />} />
                <Route path="/detalhesRestaurante/:restaurantId" element={<RestaurantDetailsPage />} />
                <Route path="/carrinho" element={<CartPage />} />
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/atualizaPerfil" element={<UpDateProfile />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;