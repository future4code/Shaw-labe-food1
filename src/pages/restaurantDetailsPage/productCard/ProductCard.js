import React from "react";

export const ProductCard = (props) => {
    return (
        <div>
            <img src={props.product.photoUrl} />
            {props.product.name}
            <br />
            {props.product.description}
            <br />
            R${props.product.price.toFixed(2)}
            <div>
                <button>adicionar</button>
            </div>
        </div>
    )
}