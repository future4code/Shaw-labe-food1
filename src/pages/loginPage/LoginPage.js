import React from "react"
import { Screencontainer, LogoImage } from "./styled";
import logo from "../../assets/logo.png"
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { goTosignUpPage } from "../../routes/coordinator"
import { useNavigate } from "react-router";

const LoginPage = () => {

  const navigate = useNavigate()
  
  return (
    <Screencontainer>
      <LogoImage src={logo} />

      <p>Entrar</p>

      <LoginForm />

      <Button
        onClick={() => goTosignUpPage(navigate)}
        type={"submit"}
        variant={"text"}
        color={"inherit"}
        margin={"normal"}
        fullWidth
      >
        Não possui cadastro? Clique aqui.
      </Button>
    </Screencontainer >
  )
}

export default LoginPage