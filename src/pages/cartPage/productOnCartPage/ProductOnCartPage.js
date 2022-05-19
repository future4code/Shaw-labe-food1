import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../global/GlobalContext";

export const ProductOnCartPage = (props) => {
    const { functions } = useContext(GlobalContext);

    return (
        <div>
            <div>
                <img src={props.item.photoUrl} />
            </div>
            <div>
                {props.item.name}
                <br />
                {props.item.description}
                <br />
                R${props.item.price.toFixed(2)}
            </div>
            <div>
                {props.item.quantity}
            </div>
            <div>
                <button
                    onClick={
                        () => functions.removeProduct(props.item)
                    }>
                    remover
                </button>
            </div>
            <p>Frete R${props.shipping.toFixed(2)}</p>
        </div>
    )
}