import { format } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardBody, CardTitle, Col, Container, ListGroup, ListGroupItem } from 'reactstrap'
import UseUserDetail from '../hooks/useUserDetail'

const ProfileDetail = () => {
  const router = useRouter()
  const query=router.query
 console.log("query:",router.query)

  const userId=Number(query.userId)
  console.log(userId)
  const user=UseUserDetail(userId)
  if(user.isSuccess){
    
    console.log(user.data)
  }
  return (
    <div>
    <Container>
      <Col>
<Card>
  {user?.isLoading?<p>loading...</p>:
<Image src={user?.data?.image} width={40} height={40} alt="profile" />
  }
  <CardBody>
<CardTitle tag="h6" className='text-center'>
{user?.data?.firstName }{" "}{user?.data?.maidenName }{" "}{user?.data?.lastName }
</CardTitle>
<ListGroup horizontal>
  <ListGroupItem>
BirthDay
  </ListGroupItem>
  <ListGroupItem>


    { user.isSuccess?format(new Date(user?.data?.birthDate),'dd MMMM yyyy',):null}

  </ListGroupItem>
</ListGroup>
  </CardBody>
</Card>

      </Col>
    </Container>
    </div>
  )
}

export default ProfileDetail