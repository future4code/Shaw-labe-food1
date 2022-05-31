import styled from "styled-components";

export const ProfileData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px;

  @media (min-width: 500px) {
    margin-left: 15vw;
    margin-right: 15vw;
  }
  @media (min-width: 600px) {
    margin-left: 20vw;
    margin-right: 20vw;
  }
  @media (min-width: 700px) {
    margin-left: 25vw;
    margin-right: 25vw;
  }
  @media (min-width: 1000px) {
    margin-left: 30vw;
    margin-right: 30vw;
  }
`

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-weight: bold;
  }
`

export const AddressData = styled.div`
  background-color: #eeee;
  display: flex;
  height: 12vh;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  
  @media (min-width: 500px) {
    margin-left: 12vw;
    margin-right: 12vw;
  }
  @media (min-width: 600px) {
    margin-left: 18vw;
    margin-right: 18vw;
  }
  @media (min-width: 700px) {
    margin-left: 23vw;
    margin-right: 23vw;
  }
  @media (min-width: 1000px) {
    margin-left: 29vw;
    margin-right: 29vw;
  }

  h4 {
    color: #b8b8b8;
    font-weight: normal;
  }

  p {
    font-weight: bold;
  }
`

export const OrderHistory = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 16px 10px 16px;

  @media (min-width: 500px) {
    margin-left: 15vw;
    margin-right: 15vw;
  }
  @media (min-width: 600px) {
    margin-left: 20vw;
    margin-right: 20vw;
  }
  @media (min-width: 700px) {
    margin-left: 25vw;
    margin-right: 25vw;
  }
  @media (min-width: 1000px) {
    margin-left: 30vw;
    margin-right: 30vw;
  }

  hr {
    border-color: black;
    box-sizing: border-box;
    width: 100%;
    height: 1px;
    margin: 8px 0 7px 0;
  }

  p{
    text-align: center;
    margin-top: 20px;
    font-weight: bold;  
  }
`

export const DivCards = styled.div`
  margin-bottom: 7vh;
`