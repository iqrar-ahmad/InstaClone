import {useRef,useReducer,useState} from "react"
import { useQuery } from 'react-query'
import axios from '../api/axios'
import { initialState, userReducer } from "../features/useReducer"
const LOGIN_URL="users"
const UseUserDetail = (id) => {
      // console.log("user",id);

      
   return  useQuery(["userDetail"],async()=>{
    if(id && typeof id !== 'object') {
      const res=await axios.get(`users/${id}`)
      return await res.data
    }
    })

}

export default UseUserDetail