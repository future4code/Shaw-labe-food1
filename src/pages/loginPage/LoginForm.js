import React, { useState } from "react"
import useUnProtectedPage from "../../hooks/useUnprotectedPage"
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from '../../routes/coordinator'
import useForm from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from '../../constants/urls'
import { InputsContainer } from "./styled";
import { InputLabel, OutlinedInput, TextField } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Button } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";

const LoginForm = () => {

    useUnProtectedPage()
    const navigate = useNavigate()
    const { form, onChange } = useForm({ email: "", password: "" })
    const [isLoading, setLoading] = useState(false)
    const [values, setValues] = useState({showPassword: false})

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmitForm = e => {
        e.preventDefault()
        login()
    }

    const login = () => {
        setLoading(true)
        
        const url = `${BASE_URL}login`

        axios.post(url, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("tokenadress", res.data.token)
            setLoading(false)
            goToFeedPage(navigate)
        })
        .catch((err) => {
            alert(err.response.data.message)
            setLoading(false)
        })
    }

    return (
        <InputsContainer onSubmit={onSubmitForm}>
            <TextField label={"E-mail"}
                name={"email"}
                type={"email"}
                value={form.email}
                onChange={onChange}
                variant={"outlined"}
                InputLabelProps={{
                    shrink: true,
                }}
                placeholder={"email@email.com"}
                fullWidth
                required
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

            <Button
                type={"submit"}
                variant={"contained"}
                color={"primary"}
                fullWidth
            >
                {isLoading ? <CircularProgress color={"inherit"} size={26} /> : "Entrar"}
            </Button>
        </InputsContainer>
    )
}

export default LoginForm