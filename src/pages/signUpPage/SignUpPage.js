import React from "react"
import { SingUpForm } from "./singUpForm/SingUpForm";
import { ContainerSingup, Title } from "./styled";
import logo from "../../assets/logo.png"



function SignUpPage () {
  return (
    <ContainerSingup>
      <img src={logo}/>
      <Title>Cadastrar</Title>
     <SingUpForm/>
    </ContainerSingup>
  )
}

export default SignUpPage;