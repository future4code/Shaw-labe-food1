import styled from "styled-components";

export const DivCart = styled.div`
  @media (min-width: 500px) {
    margin-left: 8vw;
    margin-right: 8vw;
  }
  @media (min-width: 600px) {
    margin-left: 15vw;
    margin-right: 15vw;
  }
  @media (min-width: 700px) {
    margin-left: 18vw;
    margin-right: 18vw;
  }
  @media (min-width: 1000px) {
    margin-left: 30vw;
    margin-right: 30vw;
  }
`

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
  font-weight: bold;
  font-size: 16px;
  @media (min-width: 500px) {
    width: 75%;
    left: 12.5%;
  }
  @media (min-width: 600px) {
    width: 62%;
    left: 19%;
  }
  @media (min-width: 700px) {
    width: 58%;
    left: 21%;
  }
  @media (min-width: 850px) {
    width: 55%;
    left: 22.5%;
  }
  @media (min-width: 1000px) {
    width: 40%;
    left: 30%;
  }
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
  font-weight: bold;
  font-size: 16px;
  @media (min-width: 500px) {
    width: 75%;
    left: 12.5%;
  }
  @media (min-width: 600px) {
    width: 62%;
    left: 19%;
  }
  @media (min-width: 700px) {
    width: 58%;
    left: 21%;
  }
  @media (min-width: 850px) {
    width: 55%;
    left: 22.5%;
  }
  @media (min-width: 1000px) {
    width: 40%;
    left: 30%;
  }
`