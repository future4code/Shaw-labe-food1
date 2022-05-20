import { IconButton } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import avatarW from "../../assets/avatar-w.png";
import avatar from "../../assets/avatar.png";
import homepageW from "../../assets/homepage-w.png";
import homepage from "../../assets/homepage.png";
import shoppingW from "../../assets/shopping-cart-w.png";
import shopping from "../../assets/shopping-cart.png";
import { goToCartPage, goToFeedPage, goToProfilePage } from "../../routes/coordinator";
import { ContainerFooter } from "./styled";

export const Footer = (props) => {
  const navigate = useNavigate()

  return (
    <ContainerFooter>
      <IconButton title={"Página Principal"} onClick={() => goToFeedPage(navigate)} aria-label='home'>
        <img src={props.page === 'home' ? homepage : homepageW} alt={"imagem de casa, representando a página principal"} />
      </IconButton>

      <IconButton title={"Carrinho"} onClick={() => goToCartPage(navigate)} aria-label="cart">
        <img src={props.page === 'cart' ? shopping : shoppingW} alt={"imagem ilustrativa do carrinho de compras"} />
      </IconButton>

      <IconButton title={"Perfil"} onClick={() => goToProfilePage(navigate)} aria-label="profile">
        <img src={props.page === 'profile' ? avatar : avatarW} alt={"Imagem ilustrativa representando o perfil"} />
      </IconButton>
    </ContainerFooter>
  );
};
