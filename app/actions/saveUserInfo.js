import constants from '../resource/constants'
export const saveUserInfoFromFacebook=(info) => {
  return {
    type: constants.SAVE_USER_INFO_FROM_FACEBOOK,
    payload:info,
  };
}

export const saveUserInfoFromGoogle=(info) => {
  console.log('info',info);
  return {
    type: constants.SAVE_USER_INFO_FROM_GOOGLE,
    payload:info,
  };
}
