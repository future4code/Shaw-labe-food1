import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 130px;
  width: 100%;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin: 7px 0 0;
`

export const CardMediaItemImg = styled.img`
  height: 129px;
  width: 100px;
  margin-top: -0.5px;
  border-radius: 8px 0px 0px 8px;
  object-fit: cover;
`

export const CardInfoMeal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0px 15px 16px;
  flex-grow: 1;
`

export const RestaurantName = styled.p`
  font-size: 16px;
  color: #e86e5a;
`

export const Description = styled.p`
  font-size: 14px;
  color: #b8b8b8;
`

export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
`

export const ButtonRemove = styled.button`
  width: 90px;
  height: 31px;
  font-size: 12px;
  color: #e02020;
  border: solid 1px #e02020;
  background-color: #fff;
  border-radius: 8px 0px;
  position: relative;
  top: 97px;
  left: 30px;
  font-weight: bold;
`

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  position: relative;
  bottom: 1px;
  border: solid 1px #e02020;
  border-radius: 0px 8px;
  color: #e02020;
`