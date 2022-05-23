import styled from "styled-components"
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActions, Typography } from "@material-ui/core";

export const ContainerCard = styled(Card)`
    border: solid 1px #b8b8b8;
`

export const CardMediaImg = styled(CardMedia)`
    border-radius: 0.3rem 0.3rem 0 0;
`

export const TypographyName = styled(Typography)`
    padding: 0.4em;
`

export const CardActionsInfo = styled(CardActions)`
    display: flex;
    justify-content: space-between;
`