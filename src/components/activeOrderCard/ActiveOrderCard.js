import React, {useContext} from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { ContainerCard, Informations, P } from "./style"
import AccessTimeIcon from '@material-ui/icons/AccessTime';


function ActiveOrderCard() {
    const {states} = useContext(GlobalContext)

    return(
        <ContainerCard>
            <div>
                <AccessTimeIcon style={{ color: "#ffffff" }} fontSize="large"/>
            </div>

            <Informations>
                <P> Pedido em andamento </P>

                <p>
                    {!states.activeOrder ? 
                        "" 
                        : 
                        states.activeOrder?.order.restaurantName 
                    }
                </p>

                <h3>
                    SUBTOTAL R$
                    {!states.activeOrder ? 
                        "" 
                        : 
                        states.activeOrder?.order.totalPrice.toFixed(2) 
                    }
                </h3>
            </Informations>
        </ContainerCard>
    )
}

export default ActiveOrderCard;