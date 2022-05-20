import React from "react"
import { Screencontainer, LogoImage, Subtitle, SingUpButton } from "./styled";
import logo from "../../assets/logo.png"
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { goTosignUpPage } from "../../routes/coordinator"
import { useNavigate } from "react-router";

const LoginPage = () => {

  const navigate = useNavigate()

  return (
    <Screencontainer>
      <LogoImage src={logo} alt={"Imagem logotipo Rappi4"} />

      <Subtitle>Entrar</Subtitle>

      <LoginForm />

      <Button
        onClick={() => goTosignUpPage(navigate)}
        type={"submit"}
        variant={"text"}
        color={"inherit"}
        margin={"normal"}
        fullWidth
      >
        <SingUpButton>  Não possui cadastro? Clique aqui. </SingUpButton>
      </Button>
    </Screencontainer >
  )
}

export default LoginPage