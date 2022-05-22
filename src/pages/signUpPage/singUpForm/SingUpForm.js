import React, { useState } from "react";
import useUnprotectdPage from '../../../hooks/useUnprotectedPage'
import { useNavigate } from "react-router-dom";
import { goToAdressPage } from "../../../routes/coordinator"
import useForm from "../../../hooks/useForm"
import axios from "axios"
import { BASE_URL } from "../../../constants/urls"
import { ContainerForm } from "./styled"
import { 
  FormControl, 
  IconButton, 
  InputAdornment, 
  InputLabel, 
  OutlinedInput, 
  TextField 
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";

export const SingUpForm = () => {
  
  useUnprotectdPage()
  const navigate = useNavigate()
  const { form, onChange } = useForm({ name: "", email: "", cpf: "", password: "" })
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({showPassword: false, showConfirmPassword: false})

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmitForm = (event) => {
    event.preventDefault()

    if (form.password === passwordConfirm) {
      postSingUp(form, navigate)
    } else {
      alert("As senhas devem ser iguais!")
    }
  }

  const postSingUp = async (body, navigate) => {
    setIsLoading(true)

    try {
      const res = await axios.post(`${BASE_URL}signup`, body)
      localStorage.setItem("token", res.data.token);
      setIsLoading(false)
      clearPasswordConfirm()
      goToAdressPage(navigate)
    } catch(err) {
      alert("Erro: ", err.response.data.message)
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
          placeholder="Nome e sobrenome"
          type={"text"}
          name={"name"}
          label={"Nome"}
          variant={"outlined"}
          fullWidth
          value={form.name}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          placeholder="email@email.com"
          type={"email"}
          name={"email"}
          label={"E-mail"}
          variant={"outlined"}
          inputProps={{
            pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
            title:"Digite um E-mail válido com letras minúsculas"
          }}
          fullWidth
          value={form.email}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          placeholder="000.000.000-00"
          type={"text"}
          name={"cpf"}
          label={"CPF"}
          variant={"outlined"}
          inputProps={{
            pattern:"([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})",
            title:"Digite um CPF válido"
          }}
          fullWidth
          value={form.cpf}
          onChange={onChange}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />

        <FormControl
          variant="outlined"
          required
          fullWidth
        >
          <InputLabel 
            shrink
            htmlFor="outlined-adornment-password"
          >
            Senha
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder={"Mínimo 6 caracteres"}
            inputProps={{
              pattern: "^.{6,}$",
              title: "Senha deve possuir no mínimo 6 caracteres"
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? 
                    <Visibility />
                    : 
                    <VisibilityOff />
                  }
                </IconButton>
              </InputAdornment>
            }
            notched 
            labelWidth={59}
          />
        </FormControl>
        
        <FormControl
          variant="outlined"
          required
          fullWidth
        >
          <InputLabel 
            shrink
            htmlFor="outlined-adornment-confirm-password"
          >
            Confirmar
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirm-password"
            type={values.showConfirmPassword ? 'text' : 'password'}
            name={"password"}
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
            placeholder={"Confirme a senha anterior"}
            inputProps={{
              pattern: "^.{6,}$",
              title: "Senha deve ser a mesma anteriormente"
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={handleClickShowConfirmPassword}
                  edge="end"
                >
                  {values.showConfirmPassword ? 
                    <Visibility />
                    : 
                    <VisibilityOff />
                  }
                </IconButton>
              </InputAdornment>
            }
            notched 
            labelWidth={87}
          />
        </FormControl>

        <Button 
          type={"submit"}
          variant={"contained"}
          color={"primary"}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={26} /> : "Cadastrar"}
        </Button>
      </ContainerForm>
    </div>
  );
};