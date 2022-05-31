import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../global/GlobalContext";
import { ArrowBackIos } from "@material-ui/icons";
import Header from "../../components/header/Header"
import { SingUpForm } from "./singUpForm/SingUpForm";
import { ContainerSingup, Title } from "./styled";
import logo from "../../assets/logo.png"

function SignUpPage() {

  const { states, setters } = useContext(GlobalContext)

  useEffect(() => {
    setters.setHeaderText("")
    setters.setHeaderButton(<ArrowBackIos />)
    setters.setUpdate(states.update + 1)
  }, [])

  return (
    <div>
      <Header />

      <ContainerSingup>
        <img src={logo} alt={"Imagem logotipo Rappi4"} />

        <Title> Cadastrar </Title>

        <SingUpForm />
      </ContainerSingup>
    </div>
  )
}

export default SignUpPage;