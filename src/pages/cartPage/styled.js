import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { CardMedia } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
margin:1rem;
`

export const AddressData = styled.div`
  background-color: #eeee;
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  padding: 7px;

  h4 {
    color: #b8b8b8;
    margin: 5px;
  }

  p {
    font-weight: bold;
  }
`

export const Data = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 5px;
    font-weight: bold;
  }
  `

export const EmptyCartP = styled.p`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding-top: 1rem;
padding-bottom: 1.5rem;
font-weight: 500;
`

export const Delivery = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`
export const Subtotal= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top: 1rem;
`

export const PaymentMethods = styled.h4`
margin-top: 1.5rem;
margin-bottom: 0.5rem;
`

export const ButtonConfirm = styled(Button)`
flex-direction: column ;
justify-content: flex-end;
position: absolute;
/* position: relative; */
top:18rem;
height: 3rem;
`
export const ContainerCardDetail = styled(Card)`
    margin: 1rem;
    p{
        font-weight:200;
        
    }
`

export const CardMediaImg = styled(CardMedia)`
    border-radius: 0.7rem 0.7rem 0 0;
`

export const P = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    p{
        margin-right: 10rem;
    }
`

export const Title = styled.h3`
margin-top: 1rem;
margin-bottom: 0.5rem;
`