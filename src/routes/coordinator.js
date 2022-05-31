
export const goToFeedPage = (navigate) => {
    navigate("/home")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goTosignUpPage = (navigate) => {
    navigate("/cadastro")
}

export const goToAdressPage = (navigate, setter, setterTwo) => {
    navigate("/endereco")
}

export const goToDetailsPage = (navigate, id) => {
    navigate(`/detalhesRestaurante/${id}`)
}

export const goToCartPage = (navigate) => {
    navigate("/carrinho")
}

export const goToProfilePage = (navigate) => {
    navigate("/perfil")
}


export const goToUpDateProfile = (navigate, setter, setterTwo) => {
    navigate("/atualizaPerfil")
}

export const goBack = (navigate) => {
    navigate(-1)
}
