import styled from "styled-components";

export const ProfileData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px;
`

export const Data = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 5px;
    font-weight: normal;
  }
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

export const OrderHistory = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  h4{
      margin-left: 5px;
  }

  hr {
    border-color: black;
    box-sizing: border-box;
    width: 100%;
    margin: 5px;
  }

  p{
      margin-top: 50px;
      text-align: center;
      font-weight: normal;
  }
`