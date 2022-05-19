import React, { useContext, useEffect } from "react";
import useForm from "../../hooks/useForm"
import axios from "axios";
import { BASE_URL, headers } from "../../constants/urls"
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { FormAdress } from "./styled";
import useProtectdPage from "../../hooks/useProtectedPage"
import Header from "../../components/header/Header";
import { tokenadress } from "../../constants/urls";
import { GlobalContext } from "../../global/GlobalContext";
import { goToProfilePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@material-ui/icons";

export default function UpDateProfile() {

    useProtectdPage()
    const { form, onChange, clear, setForm } = useForm({ name: "", email: "", cpf: "" })
    const { states, requests, setters } = useContext(GlobalContext)
    const navigate = useNavigate()

    const updateProfile = () => {
        axios
            .put(`${BASE_URL}profile`, form, { headers: { auth: tokenadress } })
            .then((res) => {
                goToProfilePage(navigate)
                alert("Perfil atualizado")
            })
            .catch((err) => {
                console.log(err.response);
            })
    }


    const onSubmitForm = (ev) => {
        ev.preventDefault()
        updateProfile()
    }

    useEffect(() => {
        setters.setHeaderText("Editar")
        setters.setHeaderButton(<ArrowBackIos/>)
        setForm({name: `${states.profile?.user.name}`, email:`${states.profile?.user.email}`, cpf: `${states.profile?.user.cpf}`})
        requests.getProfile()
    }, [states.profile?.user.name, states.profile?.user.email, states.profile?.user.cpf])

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