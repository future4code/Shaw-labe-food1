import styled from "styled-components";

export const DivText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    font-weight: bold;

    hr{
        width: 100vw;
    }
`

export const DivTextButton = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    height: 8vh;
    align-items: center;
    justify-items:  center;

    p{
        text-align: center;
        grid-column: 2/3;
        font-weight: bold;
    }
`

export const DivButton = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    height: 8vh;
    align-items: center;
    justify-items: center;

    hr{
        width: 100vw;
    }

    button{
        text-align: center;
        grid-column: 1/2;
    }
`