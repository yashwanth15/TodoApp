import constants from '../resource/constants'

var initialState ={
  todos:[],
  changed:false,
}

export default (state = initialState, action) => {
 switch(action.type){
   case constants.SAVE_TODO:
    let todos=state.todos;
    todos.push({title:action.payload.title,context:action.payload.context})
    console.log(todos);
    return {...state,todos:todos,changed:!state.changed}
   default:
     return state;
 }
}
