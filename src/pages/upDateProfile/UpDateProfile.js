import React from "react";
import useForm from "../../hooks/useForm"
import axios from "axios";
import { BASE_URL, headers } from "../../constants/urls"
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { FormAdress } from "./styled";
import useProtectdPage from "../../hooks/useProtectedPage"
import Header from "../../components/header/Header";



export default function UpDateProfile() {
    const { form, onChange, clear } = useForm({ name: "", email: "", cpf: "" })
    useProtectdPage()

    const updateProfile = () => {
        axios
            .put(`${BASE_URL}profile`, form, headers)
            .then((res) => {
                console.log(res.data);
                //-- talvez direcionar para o perfil atualizado 
            })
            .catch((err) => {
                console.log(err.response);
                clear()
            })
    }

    const onSubmitForm = (ev) => {
        ev.preventDefault()
        updateProfile()

    }

    return (
        <div>
            <Header />
            <FormAdress onSubmit={onSubmitForm}>
                <TextField
                    inputProps={{
                        pattern: "^.{3,30}$",
                        title: "Nome deve possuir no mínimo 3 e no máximo 30 caracteres"
                    }}
                    label="Nome"
                    variant="outlined"
                    placeholder="Nome"
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <TextField
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    placeholder="E-mail"
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <TextField
                    label="CPF"
                    variant="outlined"
                    inputProps={{
                        pattern: "^.{11,11}$",
                        title: "CPF deve conter 11 números"
                    }}
                    placeholder="CPF"
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    required
                />
                <Button color="primary" variant="contained" type="submit">Salvar</Button>
            </FormAdress>
        </div>
    )
} 