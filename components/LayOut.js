import { useRouter } from "next/router";
import styles from "../styles/Login.module.css"
import SideMenu from './SideMenu';
import React from 'react'
import RightCard from './RightCard';

import { Col,Card, Container, Row, CardHeader, CardBody, CardTitle, ListGroup, ListGroupItem, CardSubtitle, Button, CardText, Form, Label, Input } from 'reactstrap';
const LayOut = ({children}) => {
  return (
    <>
    <Container fluid>
      <Row className=''>
      
        <Col className='col-3 '>
        <aside className={`position-fixed d-block ${styles["w-23"]}`}>
<SideMenu/>
        </aside>
        </Col>
        <Col className='col-6 d-flex gap-4 flex-column my-4'>
      {children}
      

        </Col>
        <Col className='col-3'>
        <aside>
<RightCard/>
        </aside>
        </Col>
      </Row>
    </Container>
    
    </>
  )
}

export default LayOut





















