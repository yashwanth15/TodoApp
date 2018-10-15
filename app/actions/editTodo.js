import constants from '../resource/constants'
export const editTodo=(item,index) => {
  return {
    type: constants.EDIT_TODO,
    payload:item,
    index:index
  };
}
