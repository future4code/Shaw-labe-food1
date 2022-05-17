import moment from "moment";
import React from "react"

function OrderCard(props) {
    const newDate = moment(new Date(props.order.createdAt)).format("DD MMMM YYYY")

    return (
        <div>
            <h3>{props.order.restaurantName}</h3>
            {newDate}
            <p>Subtotal R${props.order.totalPrice}0</p>
        </div>
    )
}

export default OrderCard 