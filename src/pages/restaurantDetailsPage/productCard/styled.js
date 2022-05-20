import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 7rem;
display: flex;
flex-direction: row;
border: solid 1px #b8b8b8;
border-radius: 1rem;
margin-top: 1rem;
`


export const CardInfoMeal = styled.div`
  width: 8rem;
  font-weight: 100;
  color: #b8b8b8;
`

export const CardMediaItemImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50px 0px 0px 50px;
`

export const ButtonAdd = styled.div`
button{
width: 22vw;
height: 4vh;
font-size: 12px;
color: #e02020;
border: solid 1px #e02020;
background-color: #fff;
border-radius: 10px 0px 10px 0px;
position: relative;
top: 4.8rem;
left: 2rem;
}
`

export const Select = styled.div`
  position: relative;
  top:3rem
`

export const Quantity = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  border: solid 1px #e02020;
  border-radius: 0px 10px 0px 10px;
`
