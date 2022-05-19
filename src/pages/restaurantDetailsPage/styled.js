import styled from "styled-components"
import Card from "@material-ui/core/Card";
import { CardMedia } from "@material-ui/core";

export const ContainerCardDetail = styled(Card)`
margin: 1rem;
p{
    font-weight:200;
    
}
`

export const CardMediaImg = styled(CardMedia)`
border-radius: 0.7rem;
`

export const P = styled.p`
display: flex;
flex-direction: row;
justify-content: space-between;
p{
    margin-right: 10rem;
}
`