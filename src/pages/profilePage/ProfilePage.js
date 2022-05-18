import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { goToAdressPage } from "../../routes/coordinator"
import { GlobalContext } from "../../global/GlobalContext";
import OrderCard from "../../components/orders/OrderCard"
import { goToUpDateProfile } from "../../routes/coordinator"
import useProtectdPage from "../../hooks/useProtectedPage"
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { MainContainer } from "./styled"
import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

function ProfilePage() {
  const navigate = useNavigate()
  const { states, requests, setters } = useContext(GlobalContext)
  useProtectdPage()


  const mapOrders = states.orders?.orders.map((order) => {
    return (
      <OrderCard key={order.restaurantName} order={order} />
    )
  })

  useEffect(() => {
    requests.getProfile()
    requests.getOrdersHistory()
    setters.setHeaderText("Meu perfil")
    setters.setHeaderButton("")
  }, [])

  return (
    <div>
      <Header />
      <MainContainer>
        <p>
          {states.profile?.user.name}
          <br />
          {states.profile?.user.email}
          <br />
          {states.profile?.user.cpf}
        </p>
        <button onClick={() => goToUpDateProfile(navigate, setters.setHeaderButton("x"), setters.setHeaderText("Editar"))}>
          <CreateOutlinedIcon />
        </button>
      </MainContainer>
      <MainContainer>
        <p>Endereço cadastrado</p>
        <p>{states.profile?.user.address}</p>
        <button onClick={() => goToAdressPage(navigate, setters.setHeaderButton("x"), setters.setHeaderText("Endereço"))}>
          <CreateOutlinedIcon />
        </button>
      </MainContainer>
      <MainContainer>
        <h3>Histórico de pedidos</h3>
        {mapOrders}
      </MainContainer>
      <Footer page='profile' />
    </div>
  )
}

export default ProfilePage;