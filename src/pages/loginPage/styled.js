import styled from "styled-components";

export const Screencontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 12vh;
`

export const LogoImage = styled.img`
    width: 104px;
    height: 58px;
`

export const Subtitle = styled.p`
    font-weight: bold;
    font-size: 16px;
    margin-top: 5vh;
    margin-bottom: 3vh;
`

export const InputsContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    width: 80vw;
    max-width: 450px;
    margin-bottom: 3vh;

    button{
        text-transform: capitalize;
        font-size: 16px;
        font-weight: bold;
    }
`

export const SingUpButton = styled.span`
  text-transform: none;
  font-size: 16px;
  font-weight: bold;
`