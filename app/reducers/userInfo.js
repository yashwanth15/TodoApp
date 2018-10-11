import constants from '../resource/constants'

var initialState ={
  firstName:'',
  lastName:'',
  email:''
}

export default (state = initialState, action) => {
 switch(action.type){
   case constants.USER_INFO:
     return {...state,firstName:action.payload.firstName,lastName:action.payload.lastName,email:action.payload.email}
   default:
     return state;
 }
}
