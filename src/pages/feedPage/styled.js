import Tabs from '@material-ui/core/Tabs';
import styled from "styled-components";

export const DivFeed = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 6.25px 20px 60px 20px;
    gap: 10px;
    max-width: 600px;
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
        margin-left: 28vw;
        margin-right: 28vw;
    }
`

export const FilterName = styled(Tabs)`
    padding: 0 2px;  
`

export const SearchMessage = styled.p`
    text-align: center;
    margin-top: 20px;
    font-weight: bold;  
`