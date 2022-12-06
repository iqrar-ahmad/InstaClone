
import Image from 'next/image'
import React,{useReducer} from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { initialState, userReducer } from '../features/useReducer'
import styles from "../styles/Login.module.css"
const RightCard = () => {
  const [state,dispatch]=useReducer(userReducer,initialState)
  return (
    <>
      <Container className={`${styles['bg-secondary']} bg-secondary `}>
<Row className='d-flex align-items-center justify-content-between'>
<Col className='col-8 d-flex gap-2  align-items-center '>
  <Image src={state.user?.image} width={30} height={30} className="rounded-circle " alt="derf"/>
  <h6>{`${state.user?.firstName} ${state.user?.lastName}`}</h6>

</Col>
<Col className='col-4'>
  <Button color='link'>Switch</Button>

</Col>


</Row>
</Container>
    </>
  )
}

export default RightCard