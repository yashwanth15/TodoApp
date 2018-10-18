import constants from '../resource/constants'
export const saveTodo=(data) => {
  return {
    type: constants.SAVE_TODO,
    payload:data,
  };
}

export const replaceTodos=(data) => {
  return {
    type: constants.REPLACE_TODO,
    payload:data,
  };
}
