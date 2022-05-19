import React, { useContext, useEffect, useState } from "react"
import useProtectdPage from "../../hooks/useProtectedPage"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import axios from "axios"
import { BASE_URL, headers, tokenadress } from "../../constants/urls"
import { DivAdress, FormAdress } from "./styled"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { goToFeedPage, goToProfilePage } from "../../routes/coordinator"
import { GlobalContext } from "../../global/GlobalContext"
import Header from "../../components/header/Header"
import { CircularProgress } from "@material-ui/core"
import Loading from "../../components/Loading/Loading"
import { ArrowBackIos } from "@material-ui/icons"

function AdressPage() {

  useProtectdPage()
  const navigate = useNavigate()
  const { states, setters, requests } = useContext(GlobalContext)
  const { form, onChange, setForm } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitAddAdress = (event) => {
    event.preventDefault()
    setIsLoading(true)
    axios.put(`${BASE_URL}address`, form, { headers: { auth: localStorage.getItem("token") } })
      .then((res) => {
        console.log(res.data)
        console.log(form)
        alert("Cadastro de endereço feito com sucesso!")
        localStorage.setItem("tokenadress", res.data.token)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err.response)
        console.log(form)
        alert("Deu ruin Bergue, confere o console ae!!")
        setIsLoading(false)
      })
      {states.profile?.user.hasAddress ? goToProfilePage(navigate) : goToFeedPage(navigate)}
  }

  console.log(states.address?.address.city)

  useEffect(() => {
    setters.setHeaderButton(<ArrowBackIos/>)
    setters.setHeaderText(!tokenadress ? "" : "Endereço")
    requests.getFullAddress()
    setForm({
      street: `${!states.profile?.user.hasAddress ? "" : states.address?.address.street}`, 
      number:`${!states.profile?.user.hasAddress ? "" : states.address?.address.number}`, 
      neighbourhood: `${!states.profile?.user.hasAddress ? "" : states.address?.address.neighbourhood}`, 
      city: `${!states.profile?.user.hasAddress ? "" : states.address?.address.city}`, 
      state: `${!states.profile?.user.hasAddress ? "" : states.address?.address.state}`, 
      complement: `${!states.profile?.user.hasAddress ? "" : (states.address?.address.complement !== null ? states.address?.address.complement : "")}`
    })
    requests.getProfile()
  }, [
    states.address?.address.name, 
    states.address?.address.number, 
    states.address?.address.neighbourhood, 
    states.address?.address.city, 
    states.address?.address.state, 
    states.address?.address.complement, 
    states.headerText
  ])

  console.log(states.profile)

  return (
    <>
      <Header />
      {states.address?.address ?  
        <DivAdress>
          {states.profile?.user.hasAddress === true || states.profile?.user.hasAddress === "undefined" ? "" : <p> Meu endereço </p>}

          <FormAdress onSubmit={onSubmitAddAdress}>
            <TextField variant="outlined"
              label="Logradouro"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Rua / Av."
              name="street"
              value={form.street}
              onChange={onChange}
              required
            />

            <TextField variant="outlined"
              label="Número"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Número"
              type="number"
              name="number"
              value={form.number}
              onChange={onChange}
              required
            />

            <TextField variant="outlined"
              label="Complemento"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Apto. / Bloco"
              name="complement"
              value={form.complement}
              onChange={onChange}
            />

            <TextField variant="outlined"
              label="Bairro"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Bairro"
              name="neighbourhood"
              value={form.neighbourhood}
              onChange={onChange}
              required
            />

            <TextField variant="outlined"
              label="Cidade"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Cidade"
              name="city"
              value={form.city}
              onChange={onChange}
              required
            />

            <TextField variant="outlined"
              label="Estado"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Estado"
              name="state"
              value={form.state}
              onChange={onChange}
              required
            />

            <Button type="submit" variant="contained" color="primary">
              {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Salvar</>}
            </Button>
          </FormAdress>
        </DivAdress>
        : 
        <Loading />
      }
    </>
  )
}

export default AdressPage;