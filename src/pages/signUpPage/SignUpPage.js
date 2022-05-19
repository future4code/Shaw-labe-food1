import React, { useContext, useEffect } from "react"
import { SingUpForm } from "./singUpForm/SingUpForm";
import { ContainerSingup, Title } from "./styled";
import logo from "../../assets/logo.png"
import Header from "../../components/header/Header"
import { GlobalContext } from "../../global/GlobalContext";
import { ArrowBackIos } from "@material-ui/icons";

function SignUpPage() {

  const { states, requests, setters } = useContext(GlobalContext)

  useEffect(() => {
    setters.setHeaderText("")
    setters.setHeaderButton(<ArrowBackIos/>)
  }, [])

  return (
    <div>
      <Header />
      <ContainerSingup>
        <img src={logo} />
        <Title>Cadastrar</Title>
        <SingUpForm />
      </ContainerSingup>
    </div>
  )
}

export default SignUpPage;