import React, {useState} from "react";
import useForm from "../../../hooks/useForm"
import {ContainerForm} from "./styled"
import {BASE_URL} from "../../../constants/urls"
import { useNavigate } from "react-router-dom";
import {goToAdressPage} from "../../../routes/coordinator"
import axios from "axios"

export const SingUpForm = () => {
    const { form, onChange, clear } = useForm({ name: "", email: "", cpf: "", password: "" })
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const navigate = useNavigate()

    const onSubmitForm = (event) => {
      event.preventDefault();
      if(form.password === passwordConfirm){
        postSingUp(form, clear, navigate)
      }else{
        alert("Erro!! onSubmit")
      }
    }


    const postSingUp = async (body, clear, navigate) => {
      try{
        const res = await axios.post(`${BASE_URL}signup`, body)
        localStorage.setItem("token", res.data.token);
        clear()
        clearPasswordConfirm()
        goToAdressPage(navigate)
      }catch(err){
        alert("Erro:", err.response)
        console.log(err.response.message);
        clear()
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
              <input
              placeholder="Nome"
              type={"text"}
              name={"name"}
              value={form.name}
              onChange={onChange}
              required
              />
              <input 
              placeholder="E-mail"
              type={"email"}
              name={"email"}
              value={form.email}
              onChange={onChange}
              required
              />
              <input
              placeholder="CPF"
              type={"text"}
              name={"cpf"}
              value={form.cpf}
              onChange={onChange}
              required
              />
              <input
              placeholder="Senha"
              type={"password"}
              name={"password"}
              value={form.password}
              onChange={onChange}
              required
              />
              <input
              placeholder="Confirme sua senha"
              type={"password"}
              name={"password"}
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
              required
              />
              <button type={"submit"}>Cadastrar</button>
          </ContainerForm>
        
      </div>
    );
  };