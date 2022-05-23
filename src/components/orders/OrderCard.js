import React from "react"
import {OrderContainer} from "./styled"

function OrderCard(props) {

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    const newDate = new Date(props?.order.createdAt);
    let dataFormatada = ((newDate.getDate() + " " + meses[(newDate.getMonth())] + " " + newDate.getFullYear()));
    
    return (
        <OrderContainer>
            <h4>{props.order.restaurantName}</h4>
            <h5>{dataFormatada}</h5>
            <h3>SUBTOTAL R${props.order.totalPrice}0</h3>
        </OrderContainer>
    )
}

export default OrderCard 