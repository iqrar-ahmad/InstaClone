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





import { CgHeart as HeartIcon } from "react-icons/cg";
import { FaHeart as HeartFillIcon } from "react-icons/fa";
import { RiChat3Line as CommentIcon } from "react-icons/ri";
import { FiSend as SendIcon } from "react-icons/fi";
import { BsBookmark as TagIcon } from "react-icons/bs";
import { BsBookmarkFill as TagFillIcon } from "react-icons/bs";
import { IoEllipsisHorizontalSharp as PostMenuIcon } from "react-icons/io5";
import { AiOutlineSmile as SmileIcon } from "react-icons/ai";
import { GoChevronRight as NextIcon } from "react-icons/go";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import { useRouter } from "next/router";
import SideMenu from './SideMenu';




const FeedCard = ({userImageURL,user,webformatURL,likes,webformatHeight,webformatWidth,views,comments}) => {
  const [state,dispatch]=useReducer(userReducer,initialState)
  return (
   <>
     <Card>
          <CardBody>
          
            <Row className="">
              <Col className={`${styles["w-11"]} col-2 position-relative`}>
    <Image className={`rounded-circle fill ${styles.borderImage} `} width={40} height={40} src={userImageURL} alt=""/>
              {/* <canvas  width={100} height={100} className={`rounded-circle ${styles.canva}`}>

              </canvas>
              */}
             
              {/* <div className="d-flex w-100 h-100 align-items-center justify-content-center">
  <div className={`w-32 h-32 rounded-full ${styles["conic-gradient"]} position-relative`}>
  </div>
</div> */}

              
              </Col>
              <Col className={`${styles["w-80"]} col-8`}>
<CardTitle tag="h6">{user&&user}</CardTitle>
<CardSubtitle tag="p">paid partnership</CardSubtitle>
              </Col>
              <Col className='col-2 d-flex align-items-center justify-content-end'>
              <BsThreeDots/>
              </Col>
            </Row>
          </CardBody>
          
            <Image src={webformatURL} width={webformatWidth} height={webformatHeight} alt="test"  className='card-img-top h-auto'/>
          <CardBody>
          <Row className={styles.iconClass}>
<Col className={`d-flex align-items-center justify-contert-center gap-2 `}>
          
              <HeartIcon />
            
              <CommentIcon/>
          
              <SendIcon/>

          
</Col>
<Col className='d-flex justify-content-end'>

              <TagIcon/>
</Col>
            
  
          </Row>
          <Row>
            <CardText className='fw-semibold'>{likes&&likes} likes</CardText>
          </Row>
          <Row>
            <CardText><span className='fw-semibold'>{views}</span> <span className='fw-normal'> Views</span></CardText>
          </Row>
          <Row>
            <CardText><span className='fw-semibold'>{comments}</span> <span className='fw-normal'> Comments</span></CardText>

          </Row>
          </CardBody>


        </Card>
       
   </>
  )
}

export default FeedCard