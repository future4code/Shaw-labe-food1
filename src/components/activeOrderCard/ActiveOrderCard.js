import React, {useContext} from "react";
import { GlobalContext } from "../../global/GlobalContext";


function ActiveOrderCard() {
    const {states, requests, setters} = useContext(GlobalContext)

    console.log(states.activeOrder)

    return(

        <div>
            <p>Pedido em andamento</p>
            <p>{!states.activeOrder ? "" : states.activeOrder?.order.restaurantName }</p>
            <h3>SUBTOTAL R${!states.activeOrder ? "" : states.activeOrder?.order.totalPrice }</h3>
        </div>
    )
}

export default ActiveOrderCard;