import React from "react"
import { useNavigate } from "react-router";
import { goTosignUpPage } from "../../routes/coordinator"
import logo from "../../assets/logo.png"
import LoginForm from "./LoginForm";
import { Screencontainer, LogoImage, Subtitle, SingUpButton } from "./styled";
import { Button } from "@material-ui/core";

const LoginPage = () => {

  const navigate = useNavigate()

  return (
    <Screencontainer>
      <LogoImage src={logo} alt={"Imagem da logo Rappi4"} />

      <Subtitle> Entrar </Subtitle>

      <LoginForm />

      <Button
        onClick={() => goTosignUpPage(navigate)}
        type={"submit"}
        variant={"text"}
        color={"inherit"}
      >
        <SingUpButton>  Não possui cadastro? Clique aqui. </SingUpButton>
      </Button>
    </Screencontainer >
  )
}

export default LoginPage