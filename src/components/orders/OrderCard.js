import React from "react"
import {OrderContainer} from "./styled"

function OrderCard(props) {

    console.log(props.order)

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    const newDate = new Date(props?.order.createdAt);
    let dataFormatada = ((newDate.getDate() + " " + meses[(newDate.getMonth())] + " " + newDate.getFullYear()));
    
    return (
        <OrderContainer>
            <h3>{props.order.restaurantName}</h3>
            <h5>{dataFormatada}</h5>
            <h4>SUBTOTAL R${props.order.totalPrice}0</h4>
        </OrderContainer>
    )
}

export default OrderCard 