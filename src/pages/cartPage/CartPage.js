
import { Footer } from "../../components/footer/Footer";
import React, { useContext, useEffect, useState } from "react"
import Header from "../../components/header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import { Functions } from "@material-ui/icons";


function CartPage() {
  const [paymentMethod, setPaymentMethod] = useState("")
  const { states, requests, setters, functions } = useContext(GlobalContext);

  const cartBody = states.cart?.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity
    }
  })

  const body = { products: { ...cartBody, paymentMethod } }

  console.log(states.totalPrice)

  useEffect(() => {
    requests.getFullAddress()
    setters.setHeaderText("Meu carrinho")
    setters.setHeaderButton("")
  }, [states.cart]);

  return (
    <div>
      <Header />
      <div>
        <p>Endereço de entrega</p>
        <p>{states.address?.address.street}, {states.address?.address.number}</p>
      </div>
      <div>
        infos restaurantes
      </div>
      <div>
        Subtotal R${states.totalPrice && states.totalPrice.toFixed(2)}
      </div>
      Cart
      <Footer page='cart' />
    </div>
  )
}

export default CartPage;