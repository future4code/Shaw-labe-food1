import { Button } from "@material-ui/core"
import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { goBack } from "../../routes/coordinator"
import { GlobalContext } from "../../global/GlobalContext";

function Header() {
    const { states } = useContext(GlobalContext)
    const navigate = useNavigate()

    return (
        <div>
            {states.headerButton === ""
                ?
                <div> {states.headerText} </div>
                :
                <>
                    <Button onClick={() => goBack(navigate)}> {states.headerButton} </Button>
                    {states.headerText !== "" ? <div>{states.headerText}</div> : ""}
                </>
            }

        </div>
    )
}

export default Header 