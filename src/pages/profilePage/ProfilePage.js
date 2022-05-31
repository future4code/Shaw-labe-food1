import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToAdressPage } from "../../routes/coordinator";
import { GlobalContext } from "../../global/GlobalContext";
import OrderCard from "../../components/orders/OrderCard";
import { goToUpDateProfile } from "../../routes/coordinator";
import useProtectdPage from "../../hooks/useProtectedPage";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { ProfileData, Data, AddressData, OrderHistory, Orders, DivCards } from "./styled";
import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import Loading from '../../components/Loading/Loading'

function ProfilePage() {

  useProtectdPage();
  const navigate = useNavigate();
  const { states, requests, setters } = useContext(GlobalContext);

  const mapOrders = states.orders?.orders.map((order) => {
    return <OrderCard key={order.createdAt} order={order} />;
  });

  useEffect(() => {
    setters.setUpdate(states.update + 1)
    setters.setHeaderText("Meu perfil")
    setters.setHeaderButton("")
  }, [states.profile?.user, states.address?.address])

  useEffect(() => {
    requests.getOrdersHistory()
    requests.getProfile()
  }, [])

  return (
    <div>
      <Header />
      
      {states.profile?.user.name
        ?
        <>
          <ProfileData>
            <Data>
              <p>{states.profile?.user.name}</p>
              <p>{states.profile?.user.email}</p>
              <p>{states.profile?.user.cpf}</p>
            </Data>
            <CreateOutlinedIcon onClick={() => goToUpDateProfile(navigate)} />
          </ProfileData>

          <AddressData>
            <Data>
              <h4>Endereço cadastrado</h4>
              <p>{states.profile?.user.address}</p>
            </Data>
            <CreateOutlinedIcon onClick={() => goToAdressPage(navigate)} />
          </AddressData>

          <OrderHistory>
            <h4>Histórico de pedidos</h4>
            <hr />
            <DivCards>
              {mapOrders?.length !== 0 ? mapOrders : <p>Você ainda não fez nenhum pedido</p>}
            </DivCards>
          </OrderHistory>
        </>
        :
        <Loading />
      }

      <Footer page="profile" />
    </div>
  );
}

export default ProfilePage;
