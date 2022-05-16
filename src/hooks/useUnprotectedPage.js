import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const useUnprotectdPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            navigate('/feed', {replace:true})
        }
    }, [])
} 

export default useUnprotectdPage