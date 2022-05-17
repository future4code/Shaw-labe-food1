export const goToFeedPage = (navigate) =>{
    navigate("/")
}

export const goToLoginPage = (navigate) =>{
    navigate("/login")
}

export const goTosignUpPage = (navigate) =>{
    navigate("/cadastro")
}

export const goToAdressPage = (navigate) =>{
    navigate("/endereco")
}

export const goToDetailsPage = (navigate, id) => {
    navigate(`/detalhesRestaurante/${id}`)
}

export const goToCartPage = (navigate) =>{
    navigate("/carrinho")
}

export const goToProfilePage = (navigate) =>{
    navigate("/perfil")
}

export const goBack = (navigate) =>{
    navigate(-1)
}