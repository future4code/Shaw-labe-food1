import React, { useContext, useEffect } from "react"
import useProtectdPage from "../../hooks/useProtectedPage"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import axios from "axios"
import { BASE_URL, headers, tokenadress } from "../../constants/urls"
import { DivAdress, FormAdress } from "./styled"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { goToFeedPage } from "../../routes/coordinator"
import { GlobalContext } from "../../global/GlobalContext"
import Header from "../../components/header/Header"

function AdressPage() {

  useProtectdPage()
  const navigate = useNavigate()
  const { states, setters, requests } = useContext(GlobalContext)
  const { form, onChange } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  })

  const onSubmitAddAdress = (event) => {
    event.preventDefault()

    axios.put(`${BASE_URL}address`, form, {headers: { auth: localStorage.getItem("token") } })
      .then((res) => {
        console.log(res.data)
        console.log(form)
        alert("Cadastro de endereço feito com sucesso!")
        localStorage.setItem("tokenadress", res.data.token)
        goToFeedPage(navigate)
      })
      .catch((err) => {
        console.log(err.response)
        console.log(form)
        alert("Deu ruin Bergue, confere o console ae!!")
      })
  }

  useEffect(() => {
    setters.setHeaderButton("<") 
    setters.setHeaderText("Endereço")
    requests.getProfile()
  }, [])
  
  return (
    <>
      <Header />
      
      <DivAdress>
        { states.profile?.user.hasAddress === true || states.profile?.user.hasAddress === "undefined" ? "" : <p> Meu endereço </p> }

        <FormAdress onSubmit={onSubmitAddAdress}>
          <TextField variant="outlined"
            label="Logadouro"
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
            Salvar
          </Button>
        </FormAdress>
      </DivAdress>
    </>
  )
}

export default AdressPage;