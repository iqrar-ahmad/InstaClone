import React ,{useReducer}from 'react'
import { getUser } from '../features/reducers'
import { useSelector } from "react-redux";
import style from "../styles/Login.module.css"
import styles from "../styles/Login.module.css"
import { Col,Card, Container, Row, CardHeader, CardBody, CardTitle, ListGroup, ListGroupItem, CardSubtitle, Button, CardText } from 'reactstrap';
import avatar from "../assests/avatar.jpg"
import test1 from "../assests/test1.png"
import {AiOutlineHome,AiOutlineSearch,AiOutlineHeart,AiOutlineCompass,AiOutlineMenu} from "react-icons/ai"
import {BiMessageRoundedMinus,} from "react-icons/bi"
import {FiPlusSquare} from "react-icons/fi"
import {BsThreeDots} from "react-icons/bs"
import Image from 'next/image';
import { initialState, userReducer } from '../features/useReducer';
import Link from 'next/link'
import { useRouter } from 'next/router';











const SideMenu = () => {
  const [state,dispatch]=useReducer(userReducer,initialState)
  const router=useRouter()    
  const handleClick=()=>{
router.push({
  pathname:"/ProfileDetail",
  query:{userId:state.user.id}
})
  }
  return (
    <>
      <Card >
  <CardTitle  tag="h5" className={`mx-auto  ${styles.logo}`}></CardTitle>


    <ListGroup flush className={styles.listgroup} >
   <Link href="/Home">
    <ListGroupItem 
      action
      tag="button"
      >
     <AiOutlineHome/> Home
    </ListGroupItem>
    </Link>
    <ListGroupItem 
      action
      tag="button"
      >
 <AiOutlineSearch/> Search
    </ListGroupItem>
    <ListGroupItem 
      action
      tag="button"
    >
    <AiOutlineCompass/>  Explore
    </ListGroupItem>
    <ListGroupItem 
      action
      tag="button"
    >
 <BiMessageRoundedMinus/>   Messages
    </ListGroupItem>
    <ListGroupItem 
      action
      tag="button"
    >
 <AiOutlineHeart/> Notifications
    </ListGroupItem>
    <ListGroupItem 
      action
      tag="button"
    >
   <FiPlusSquare/> Create
    </ListGroupItem>
  
    <ListGroupItem 
      action
      tag="button" onClick={handleClick}
    >
      
   <Image src={state.user?.image} width={30} height={30} className="rounded-circle " alt="derf"/>  Profile
    </ListGroupItem>
    
    <ListGroupItem 
      action
      tag="button"
    >
  <AiOutlineMenu/> More
    </ListGroupItem>
    </ListGroup>
  
</Card>
    </>
  )
}

export default SideMenu