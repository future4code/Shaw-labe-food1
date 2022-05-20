import React, { useState } from "react";
import useForm from "../../../hooks/useForm"
import { ContainerForm } from "./styled"
import { BASE_URL } from "../../../constants/urls"
import { useNavigate } from "react-router-dom";
import { goToAdressPage } from "../../../routes/coordinator"
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import axios from "axios"
import { CircularProgress } from "@material-ui/core";
import useUnprotectdPage from '../../../hooks/useUnprotectedPage'

export const SingUpForm = () => {
  useUnprotectdPage()

  const navigate = useNavigate()
  const { form, onChange, clear } = useForm({ name: "", email: "", cpf: "", password: "" })
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()

    if (form.password === passwordConfirm) {
      postSingUp(form, clear, navigate)
    } else {
      alert("Erro!! onSubmit")
    }
  }

  const postSingUp = async (body, clear, navigate) => {
    setIsLoading(true)
    try {
      const res = await axios.post(`${BASE_URL}signup`, body)
      localStorage.setItem("token", res.data.token);
      setIsLoading(false)
      clearPasswordConfirm()
      goToAdressPage(navigate)
    } catch (err) {
      alert("Erro:", err.response.data.message)
      console.log(err.response.data.message);
      clear()
      setIsLoading(false)
    }
  }

  const onChangePasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value)
  }

  const clearPasswordConfirm = (event) => {
    setPasswordConfirm("")
  }

  return (
    <div>
      <ContainerForm onSubmit={onSubmitForm}>
        <TextField
          placeholder="Nome"
          type={"text"}
          name={"name"}
          label={"Nome"}
          variant={"outlined"}
          margin={"normal"}
          fullWidth
          value={form.name}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          placeholder="E-mail"
          type={"email"}
          name={"email"}
          label={"E-mail"}
          variant={"outlined"}
          margin={"normal"}
          fullWidth
          value={form.email}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          placeholder="CPF"
          type={"text"}
          name={"cpf"}
          label={"CPF"}
          variant={"outlined"}
          margin={"normal"}
          fullWidth
          value={form.cpf}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          placeholder="Senha"
          type={"password"}
          name={"password"}
          label={"Senha"}
          variant={"outlined"}
          margin={"normal"}
          fullWidth
          value={form.password}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          placeholder="Confirme sua senha"
          type={"password"}
          name={"password"}
          label={"Senha"}
          variant={"outlined"}
          margin={"normal"}
          fullWidth
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button type={"submit"}
          variant={"contained"}
          color={"primary"}
          margin={"normal"}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Cadastrar</>}
        </Button>
      </ContainerForm>
    </div>
  );
};