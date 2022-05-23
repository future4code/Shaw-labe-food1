import Tabs from '@material-ui/core/Tabs';
import styled from "styled-components";

export const DivFeed = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 90%;
    margin: 1vh auto 9.5vh auto;
    gap: 10px;
    max-width: 600px;
`

export const FilterName = styled(Tabs)`
    padding: 0 2px;  
`

export const SearchMessage = styled.p`
    text-align: center;
    margin-top: 20px;
    font-weight: bold;  
`