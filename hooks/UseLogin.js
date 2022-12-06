import {useRef,useReducer,useState} from "react"
import { useMutation } from 'react-query'
import axios from '../api/axios'
import { initialState, userReducer } from "../features/useReducer"
const LOGIN_URL="auth/login"
const useLogInfn=async(formData)=>{
    const res=await axios.post(LOGIN_URL,JSON.stringify({...formData}),{headers: {
        'Content-Type': 'application/json'}})
    
    return res
}
const UseLogin = () => {
        const [state,dispatch]=useReducer(userReducer,initialState)
        const [formData, setformData] = useState({})
    const ref=useRef()
    const dataRef=useRef()
    
    const mutation= useMutation(useLogInfn,{
        onSuccess:(data)=>{
            dataRef.current=data.data
          
            
            console.log(formData,"form")
            dispatch({type:"adduserInfo",payload:data.data})
console.log(state)
           ref.current= setTimeout(()=>{
                mutation.reset()

            },5000)
        },onMutate:()=>{
            clearTimeout(ref.current)
        },onError:()=>{
            ref.current= setTimeout(()=>{
                mutation.reset()

            },5000)
        }
    })
  return mutation
}

export default UseLogin