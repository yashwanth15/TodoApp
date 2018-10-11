import constants from '../resource/constants'

var initialState ={
  first_name:'',
  last_name:'',
  email:'',
  id:null,
}

export default (state = initialState, action) => {
 switch(action.type){
   case constants.SAVE_USER_INFO:
     return {...state,first_name:action.payload.first_name,last_name:action.payload.last_name,email:action.payload.email,id:action.payload.id}
   default:
     return state;
 }
}
