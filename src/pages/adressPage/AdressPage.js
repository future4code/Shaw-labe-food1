import React, { useContext, useEffect, useState } from "react"
import useProtectdPage from "../../hooks/useProtectedPage"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import axios from "axios"
import { BASE_URL, token, tokenadress } from "../../constants/urls"
import { DivAdress, FormAdress } from "./styled"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { goToFeedPage, goToProfilePage } from "../../routes/coordinator"
import { GlobalContext } from "../../global/GlobalContext"
import Header from "../../components/header/Header"
import { CircularProgress } from "@material-ui/core"
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
        alert("Cadastro de endereço feito com sucesso!")
        localStorage.setItem("tokenadress", res.data.token)
        setters.setUpdate(states.update + 1)
        setIsLoading(false)
        !states.profile?.user.hasAddress ? goToFeedPage(navigate) : goToProfilePage(navigate)
      })
      .catch((err) => {
        alert("Deu ruin Bergue, confere o console ae!!")
        setIsLoading(false)
        console.log(err.response.data)
      })
  }

  useEffect(() => {
    setters.setHeaderButton(<ArrowBackIos />)
    setters.setHeaderText(!tokenadress ? "" : "Endereço")
    tokenadress === null || tokenadress !== null ? requests.getProfile() : setters.setUpdate(states.update)
    tokenadress !== null || tokenadress === null ? requests.getFullAddress() : setters.setUpdate(states.update)
    setForm({
      street: `${states.address?.address.street !== undefined ? states.address?.address.street : ""}`,
      number: `${states.address?.address.number !== undefined ? states.address?.address.number : ""}`,
      neighbourhood: `${states.address?.address.neighbourhood !== undefined ? states.address?.address.neighbourhood : ""}`,
      city: `${states.address?.address.city !== undefined ? states.address?.address.city : ""}`,
      state: `${states.address?.address.state !== undefined ? states.address?.address.state : ""}`,
      complement: `${states.address?.address.complement === null || states.address?.address.complement === undefined ? "" : states.address?.address.complement}`
    })
  }, [states.address?.address.complement, states.update])

  return (
    <>
      <Header />
      
      {!states.profile?.user.hasAddress ?
        <DivAdress>
          {states.profile?.user.hasAddress === true || states.profile?.user.hasAddress === "undefined" ? 
            "" 
            : 
            <p> Meu endereço </p>
          }

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
              fullWidth
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
              fullWidth
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
              fullWidth
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
              fullWidth
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
              fullWidth
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
              fullWidth
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              {isLoading ? <CircularProgress color={"inherit"} size={26} /> : "Salvar"}
            </Button>
          </FormAdress>
        </DivAdress>
        :
        <DivAdress>
          {states.profile?.user.hasAddress === true || states.profile?.user.hasAddress === "undefined" ? 
            "" 
            : 
            <p> Meu endereço </p>
          }

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
              fullWidth
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
              fullWidth
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
              fullWidth
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
              fullWidth
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
              fullWidth
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
              fullWidth
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              {isLoading ? <CircularProgress color={"inherit"} size={26} /> : "Salvar"}
            </Button>
          </FormAdress>
        </DivAdress>
      }
    </>
  )
}

export default AdressPage;