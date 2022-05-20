import React, {useContext} from "react";
import { GlobalContext } from "../../global/GlobalContext";


function ActiveOrderCard() {
    const {states, requests, setters} = useContext(GlobalContext)

    return(

        <div>
            <p>Pedido em andamento</p>
            <p>{states.activeOrder?.order.restaurantName}</p>
            <h3>SUBTOTAL R${states.activeOrder?.order.totalPrice}</h3>
        </div>
    )
}

export default ActiveOrderCard;