
import React ,{useState,useReducer, useEffect} from 'react'
import { Card, CardBody, Col, Form, Input,Button } from 'reactstrap'
import { initialState, userReducer } from '../features/useReducer'

const SearchCard = ({setSearch}) => {
    const [searchItem, setsearchItem] = useState("")
    const [state,dispatch]=useReducer(userReducer,initialState)
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e.target.value)
        setSearch(e.target.value)
        dispatch({type:"searchImageName",payload:searchItem})
    }
    useEffect(() => {
      
    }, [searchItem])
    
  return (
   <>
     <Card>
          <CardBody>
            <Form>
            <Col className='d-flex gap-5'>
      
      <Input
        id="searchField"
        name="search"
        placeholder="Search for images"
        type="text"
      
        onChange={handleSubmit}
      />
      <Button>Search</Button>
    </Col>
            </Form>
          </CardBody>
        </Card>
   </>
  )
}

export default SearchCard