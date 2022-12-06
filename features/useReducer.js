 export  const initialState={user:{},
searchImage:""}



export   const userReducer=(state,action)=>{

switch(action.type){

    case "adduserInfo":{
        return state.user=action.payload
    }
    case "searchImageName":{
      return {...state,searchImage:action.payload}  
    }
    default:{
        return state
    }
}

  }