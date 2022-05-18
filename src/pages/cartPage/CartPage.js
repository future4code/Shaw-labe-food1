
import { Footer } from "../../components/footer/Footer";
import React, { useContext, useEffect } from "react"
import Header from "../../components/header/Header";
import { GlobalContext } from "../../global/GlobalContext";


function CartPage () {

  const { states, requests, setters } = useContext(GlobalContext);

  useEffect(() => {
    setters.setHeaderText("Meu carrinho")
    setters.setHeaderButton("")
  }, []);

  return (
    <div>
      <Header />
      Cart
      <Footer page='cart' />
    </div>
  )
}

export default CartPage;