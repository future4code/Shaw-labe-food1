import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { goToAdressPage } from "../../routes/coordinator"
import { GlobalContext } from "../../global/GlobalContext";
import OrderCard from "../../components/orders/OrderCard"
import { goToUpDateProfile } from "../../routes/coordinator"

// colocar use protected page 
function ProfilePage() {
  const navigate = useNavigate()
  const { states, requests } = useContext(GlobalContext)

  // -- Map dos pedidos --//
  const mapOrders = states.orders?.orders.map((order) => {
    return (
      <OrderCard key={order.restaurantName} order={order} />
    )
  })

  //-- useEffect ainda sem atualizar automatico --//
  useEffect(() => {
    requests.getProfile()
    requests.getOrdersHistory()
  }, [])

  return (
    <div>
      <div>
        <p>
          {states.profile?.user.name}
          <br />
          {states.profile?.user.email}
          <br />
          {states.profile?.user.cpf}
        </p>
        <button onClick={() => goToUpDateProfile(navigate)}>
          editar perfil
        </button>
      </div>
      <div>
        <p>Endereço cadastrado</p>
        <p>{states.profile?.user.address}</p>
        <button onClick={() => goToAdressPage(navigate)}>
          editar endereço
        </button>
      </div>
      <div>
        <h3>Histórico de pedidos</h3>
        {mapOrders}
      </div>
    </div>
  )
}

export default ProfilePage;