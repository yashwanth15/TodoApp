import constants from '../resource/constants'
export const deleteTodo=(index) => {
  return {
    type: constants.DELETE_TODO,
    payload:index,
  };
}

export const clearData=() => {
  return {
    type: constants.CLEAR_DATA,
  };
}
