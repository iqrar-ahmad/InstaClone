import React ,{useEffect,useState, useReducer}from 'react'

import { useSelector } from "react-redux";

import { initialState, userReducer } from '../features/useReducer';






import { useRouter } from "next/router";

import FeedCard from './FeedCard';

import SearchCard from './SearchCard';
import { UseFetchImages } from '../hooks/useFetchImages';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css'





const PostCard = () => {





const user=useSelector(state=>state.userInfo)
const router=useRouter()
console.log(router)
const [state,dispatch]=useReducer(userReducer,initialState)
const [searchItem, setsearchItem] = useState("")
console.log(state.searchImage ,"postcard")
console.log(searchItem,"ser")
let query
useEffect(() => {
  
}, [searchItem])

query=UseFetchImages(searchItem)

console.log( query?.data?.hits)

const wrapper=({children})=>{
<div className='rounded-circle h-25' style={{
                border: '1px solid #ccc',
                display: 'block',
                lineHeight: 2,
                padding: '1rem',
                marginBottom: '0.5rem',
                width: 100,
            }}>
  {children}
</div>
}


  return (
    <>
   
       <SearchCard setSearch={setsearchItem}/>
       {query?.isLoading? <> <div className=''>

        <Skeleton  height={40} width="8%" inline={true} borderRadius={999}/>
        <Skeleton  height={30} width="75%" inline={true}/>
       </div>
       </>:
    query?.data?.hits.map(image=>(
      <FeedCard key={image.id}{...image} />
    ))}
      

    
    </>
  )
}

export default PostCard