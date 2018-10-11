import constants from '../resource/constants'
export const saveUserInfo=(info) => {
  return {
    type: constants.SAVE_USER_INFO,
    payload:info,
  };
}
