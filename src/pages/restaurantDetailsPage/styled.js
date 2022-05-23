import styled from "styled-components"
import { CardMedia } from "@material-ui/core";

export const ContainerCardDetail = styled.div`
    margin: 1rem;
`

export const CardMediaImg = styled(CardMedia)`
    border-radius: 0.7rem 0.7rem 0 0;
`

export const DivInfRestaurant = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: auto;
    font-size: 16px;
    color: #b8b8b8;
`

export const NameRestaurant = styled.p`
    color: #e86e5a;
    font-weight: bold;
    font-size: 18px;
`

export const P = styled.p`
    display: grid;
    grid-template-columns: 25% 50% 25%;

    p{
        text-align: center;
        grid-column: 2/3;
    }
`

export const Title = styled.h3`
    margin-top: 2rem;
    margin-bottom: 0.5rem;
`