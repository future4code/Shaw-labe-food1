import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const useProtectdPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token === null){
            navigate('/', {replace:true})
        }
    }, [])
} 

export default useProtectdPage