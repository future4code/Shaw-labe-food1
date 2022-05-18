import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../global/GlobalContext";

export const ProductCard = (props) => {
    const { states, requests, setters } = useContext(GlobalContext)
    const [productQuantity, setProductQuantity] = useState(0)


    const addProduct = () => {
        const newProductOnCart = [...states.cart, { ...props.product, quantity: 1 }]
        setters.setCart(newProductOnCart)
        setProductQuantity(1)
    }

    // const removeProduct = (productId) => {
    // }

    return (
        <div>
            <img src={props.product.photoUrl} />
            {props.product.name}
            <br />
            {props.product.description}
            <br />
            R${props.product.price.toFixed(2)}
            <div>
                <button onClick={() => addProduct(props.product.id)}>adicionar</button>
            </div>
            {productQuantity > 0
                ?
                <div>
                    <select>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </div>
                :
                ""
            }

        </div>
    )
}