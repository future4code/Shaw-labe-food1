import styled from "styled-components"
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActions, Typography } from "@material-ui/core";

export const ContainerCard = styled(Card)`
margin: 1rem;
border-radius: 10rem;
`

export const CardMediaImg = styled(CardMedia)`
border-radius: 0.7rem;
`
export const CardActionsInfo = styled(CardActions)`
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const TypographyName = styled(Typography)`
padding-left: 0.4em;
`