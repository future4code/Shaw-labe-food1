import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { CardMedia } from "@material-ui/core";
import styled from "styled-components";

export const AddressData = styled.div`
  background-color: #eeee;
  display: flex;
  height: 12vh;
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

export const PurchasesCartDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 1rem;
  margin: 0 12px 12px 12px;
`

export const EmptyCartP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  font-weight: bold;
`

export const ContainerSummary = styled.div`
  margin: 1rem;
  margin-bottom: 19vh;
`

export const Delivery = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`

export const PaymentMethods = styled.h4`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`

export const ButtonConfirm = styled.button`
  width: 90%;
  height: 8vh;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: #E86E5A;
  position: fixed;
  bottom: 10vh;
  left: 5%;
`

export const ButtonDisabled = styled.button`
  width: 90%;
  height: 8vh;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: rgba(232, 110, 90, 0.5);
  position: fixed;
  bottom: 10vh;
  left: 5%;
`


// verificar as estilizações de baixo
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