import React from "react"

function OrderCard(props) {

    return (
        <div>
            <h3>{props.order.restaurantName}</h3>
            {/* <p>props.order.</p> */}
            data 
            {/* tem que verificar formato da data para formatar */}
            <p>Subtotal {props.order.totalPrice}</p>
        </div>
    )
}

export default OrderCard 