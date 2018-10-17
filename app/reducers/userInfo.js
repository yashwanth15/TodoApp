import constants from '../resource/constants'

var initialState ={
  first_name:'',
  last_name:'',
  email:'',
  id:null,
}

export default (state = initialState, action) => {
  console.log(action);
 switch(action.type){
   case constants.SAVE_USER_INFO_FROM_FACEBOOK:
     return {...state,first_name:action.payload.first_name,last_name:action.payload.last_name,email:action.payload.email,id:action.payload.id};
  case constants.SAVE_USER_INFO_FROM_GOOGLE:
    return { ...state,first_name:action.payload.givenName,last_name:action.payload.familyName,email:action.payload.email,id:action.payload.id};
  case constants.SAVE_NAME_EMAIL:
    return { ...state,first_name:action.payload.userName,email:action.payload.email};
   default:
     return state;
 }
}
