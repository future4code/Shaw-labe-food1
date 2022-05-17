import React from "react"
import useProtectdPage from "../../hooks/useProtectedPage"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import axios from "axios"
import { BASE_URL, headers } from "../../constants/urls"
import { DivAdress, FormAdress } from "./styled"

function AdressPage () {

  useProtectdPage() 
  const navigate = useNavigate()
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

    axios.put(`${BASE_URL}address`, form, headers)
    .then((res) => {
      console.log(res.data)
      console.log(form)
      alert("Cadastro de endereço feito com sucesso!")
      localStorage.setItem("token", res.data.token)
      navigate("/")
    })
    .catch((err) => {
      console.log(err.response)
      console.log(form)
      alert("Deu ruin Bergue, confere o console ae!!")
    })
  }

  return (
    <DivAdress>
      <p> Meu endereço </p>
      
      <FormAdress onSubmit={onSubmitAddAdress}>
        <input placeholder="Rua / Av."
          name="street"
          value={form.street}
          onChange={onChange}
          required
        />

        <input placeholder="Número"
          type="number"
          name="number"
          value={form.number}
          onChange={onChange}
          required
        />

        <input placeholder="Apto. / Bloco"
          name="complement"
          value={form.complement}
          onChange={onChange}
        />
        
        <input placeholder="Bairro"
          name="neighbourhood"
          value={form.neighbourhood}
          onChange={onChange}
          required
        />

        <input placeholder="Cidade"
          name="city"
          value={form.city}
          onChange={onChange}
          required
        />

        <input placeholder="Estado"
          name="state"
          value={form.state}
          onChange={onChange}
          required
        />

        <button type="submit">
          Salvar
        </button>
      </FormAdress>
    </DivAdress>
  )
}

export default AdressPage;