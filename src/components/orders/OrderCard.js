import React from "react"

function OrderCard(props) {
    const date = new Date(props.order.createdAt).toLocaleDateString()

    return (
        <div>
            <h3>{props.order.restaurantName}</h3>
            {date}
            <p>Subtotal R${props.order.totalPrice}0</p>
        </div>
    )
}

export default OrderCard 