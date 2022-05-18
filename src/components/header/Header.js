import { Button } from "@material-ui/core"
import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { goBack } from "../../routes/coordinator"
import { GlobalContext } from "../../global/GlobalContext";
import { DivButton, DivText, DivTextButton } from "./styled"

function Header() {
    const { states } = useContext(GlobalContext)
    const navigate = useNavigate()

    return (
        <div>
            {states.headerButton === "" ?
                <DivText> {states.headerText} </DivText>
                :
                <>
                    {states.headerText !== ""
                        ?
                        <DivTextButton>
                            <Button onClick={() => goBack(navigate)}> {states.headerButton} </Button>
                            <p> {states.headerText} </p>
                        </DivTextButton>
                        :
                        <DivButton>
                            <Button onClick={() => goBack(navigate)}> {states.headerButton} </Button>
                        </DivButton>
                    }
                </>
            }
            <hr/>
        </div>
    )
}

export default Header 