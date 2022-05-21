import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoOpening from "../../assets/ImgOpeningScreen/logo-Opening.png";
import { goToFeedPage } from "../../routes/coordinator";
import { OpeningDiv } from "./styled";

const OpeningPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => { goToFeedPage(navigate) }, 2000)
    }, [])

    return (
        <OpeningDiv>
            <img src={logoOpening} alt="Logo Rappi4" />
        </OpeningDiv>
    );
};

export default OpeningPage;