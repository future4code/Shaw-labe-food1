import React from "react";
import useForm from "../../hooks/useForm"
import axios from "axios";
import { BASE_URL, headers } from "../../constants/urls"

export default function UpDateProfile() {
    const { form, onChange, clear } = useForm({ name: "", email: "", cpf: "" })

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
            <form onSubmit={onSubmitForm}>
                <input
                    placeholder="Nome"
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    placeholder="CPF"
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    required
                />
                <button type="submit">Salvar</button>
            </form>
        </div>
    )
} 