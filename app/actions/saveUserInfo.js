import constants from '../resource/constants'
import { AsyncStorage } from "react-native"

function saveId(id,name){
  console.log('saveId',id);
  AsyncStorage.multiSet([['TodoAppUserEmail', id.toString()],['TodoAppUserName',name]])
  .then((response)=>console.log('responseSaveUserInfo',response))
  .catch((e)=>console.log('errorSaveUserInfo',e))
}

export const saveUserInfoFromFacebook=(info) => {
  saveId(info.email,info.first_name)
  return {
    type: constants.SAVE_USER_INFO_FROM_FACEBOOK,
    payload:info,
  };
}

export const saveUserInfoFromGoogle=(info) => {
  saveId(info.email,info.givenName)
  return {
    type: constants.SAVE_USER_INFO_FROM_GOOGLE,
    payload:info,
  };
}

export const saveNameEmail=(info) => {
  return {
    type: constants.SAVE_NAME_EMAIL,
    payload:info,
  };
}
