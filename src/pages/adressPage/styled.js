import styled from "styled-components";

export const DivAdress = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    p{
        font-weight: bold;
        font-size: 1rem;
        margin-top: 28px;
    }
`

export const FormAdress = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    gap: 16px;
    max-width: 450px;
    margin-top: 24px;

    button{
        text-transform: capitalize;
        font-weight: bold;
    }
`