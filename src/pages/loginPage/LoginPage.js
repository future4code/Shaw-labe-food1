import React from "react"
import { Screencontainer, LogoImage, SingUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png"
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { goTosignUpPage } from "../../routes/coordinator"
import { useNavigate } from "react-router";
import useUnprotectdPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
  // useUnprotectdPage()
  const navigate = useNavigate()
  return (
    <Screencontainer>
      <LogoImage src={logo} />
      <p>Entrar</p>
      <LoginForm />
      <SingUpButtonContainer>
        <Button
          onClick={() => goTosignUpPage(navigate)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"inherit"}
          margin={"normal"}
        >
          Não possui cadastro? Clique aqui.
        </Button>
      </SingUpButtonContainer>
    </Screencontainer >
  )
}

export default LoginPage