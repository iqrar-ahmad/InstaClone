
import {useState,useReducer} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/Login.module.css"
import {Col,Row,Card,Spinner,CardBody,Button,CardText,CardTitle,Form,FormGroup,Label,Input,FormFeedback, Alert} from "reactstrap"
import UseLogin, { useLogInfn } from "../hooks/UseLogin";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { addUserInfo } from "../features/reducers";
import { initialState, userReducer } from "../features/useReducer";
export default function LogIn() {
  const [valid, setvalid] = useState(false)
  const [visible, setVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({username:"",password:""})
//const user=useSelector(state=>state.user)


const [state,dispatch]=useReducer(userReducer,initialState)
const router=useRouter()

//const dispatch=useDispatch()
const loginMutation=UseLogin()


const onDismiss = () => setVisible(false);

  const handleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value

    setFormData(prevData=>({...prevData,[name]:value}))
    
  }
  
  
  
  const handleSubmit=(e)=>{
    e.preventDefault()
   //dispatch(addUserInfo(formData))
   if(loginMutation.isLoading )return
   loginMutation.mutateAsync(formData,{onSuccess:(data)=>{
     
     if(data?.status===200){
     setvalid(true)
   //  setFdata(data.data)

    
   //  dispatch(addUserInfo(fData))
      
      console.log(state.user)
      router.push("/Home")
    }
  },onError:(data)=>{
    setErrorMsg(data.response.data.message)
console.log(data.response.data.message)
  }})
  if(loginMutation.isError){
    //dispatch(addUserInfo(fData))


 }
 



    }
    
  
  return (
    <>
     <Col className='d-flex justify-content-center align-items-md-center my-auto vh-100 '>
<Row className='col-12 col-md-6 col-lg-4'>

  <Card  >
  <CardBody className="my-5">
  <Alert color="info" isOpen={(loginMutation.isError||loginMutation.isSuccess)?true:false} toggle={onDismiss}>
      {loginMutation.isSuccess?"successfully logged in":loginMutation.isError? errorMsg:null}
    </Alert>
    <CardTitle tag="h5" className={`mx-auto  ${styles.logo}`}>
  
    </CardTitle>
   
    <Form onSubmit={handleSubmit}>
    <FormGroup>
    <Label for="exampleEmail">
      Username or Email
    </Label>
    <Input name="username" value={formData.username} onChange={handleChange} valid={valid} />
    
   
  </FormGroup>
  <FormGroup>
    <Label for="exampleEmail">
Password
    </Label>
    <Input type="password" name="password" value={formData.password} onChange={handleChange} valid={valid} />
   
   
  </FormGroup>
<FormGroup className=" pt-3 ">


  <Button className="w-100" >
   {loginMutation.isLoading?(<><Spinner size="sm" color="info"/>{"  "}<span>Logging in...</span></>):"Log In"}
  </Button>

</FormGroup>
    </Form>
    
  </CardBody>
  </Card>

</Row>
     </Col>
    </>
  )

  }