import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E86E5A;
    height: 15vh;
    width: 100vw;
    position: fixed;
    bottom: 8vh;
    z-index: 1;
`

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;

    p{
        margin-bottom: 10px; 
        font-weight: lighter;
    }
`