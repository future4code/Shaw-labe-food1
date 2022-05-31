import styled from "styled-components"
import { CardMedia } from "@material-ui/core";

export const ContainerCardDetail = styled.div`
    margin: 1rem;

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