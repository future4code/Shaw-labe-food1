import { Typography } from "@material-ui/core"
import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 7.9rem;
display: flex;
flex-direction: row;
border: solid 1px #b8b8b8;
border-radius: 12px 12px 12px 12px;
margin-top: 0.5rem;
`

export const CardInfoMeal = styled.div`
  width: 8rem;
  font-weight: 100;
  color: #b8b8b8;
  margin-left: 8px;
  margin-top: 10px;
`

export const CardMediaItemImg = styled.img`
  width: 7.2rem;
  height: 7.8rem;
  border-radius: 12px 0px 0px 12px;
`

export const ButtonAdd = styled.button`
width: 24vw;
height: 3.8vh;
font-size: 12px;
color: black;
border: solid 1px black;
background-color: #fff;
border-radius: 10px 0px 10px 0px;
position: relative;
top: 92px;
left: 12px;
`
export const ButtonRemove = styled.button`
width: 22vw;
height: 4vh;
font-size: 12px;
color: #e02020;
border: solid 1px #e02020;
background-color: #fff;
border-radius: 10px 0px 10px 0px;
position: relative;
top: 78px;
left: 15px;
`

export const Select = styled.button`
  position: relative;
  top:3rem
`

export const Quantity = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  bottom: 1px;
  border: solid 1px #e02020;
  border-radius: 0px 16px 0px 16px;
`
export const RestaurantName = styled(Typography)`
font-weight: 400;
`

export const Price = styled.p`
color: black;

`

export const Description = styled.p`

`

