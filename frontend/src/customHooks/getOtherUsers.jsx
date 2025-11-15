import axios from "axios"
import { useEffect } from "react"
import { serverUrl } from "../main"
import { useDispatch, useSelector } from "react-redux"
import { setOtherUsers, setUserData } from "../redux/userSlice"
import BASE_URL from '../api'


const getOtherUsers=()=>{
    let dispatch=useDispatch()
    let {userData}=useSelector(state=>state.user)
    useEffect(()=>{
        const fetchUser=async ()=>{
            try {
                let result=await axios.get(`${BASE_URL}/api/user/others`,{withCredentials:true})
                dispatch(setOtherUsers(result.data))
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    },[userData])
}

export default getOtherUsers