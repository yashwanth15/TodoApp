import constants from '../resource/constants'

var initialState ={
  todos:[{title:'Welcome',context:'Click to edit'}],
  changed:false,
}

export default (state = initialState, action) => {
 switch(action.type){
   case constants.SAVE_TODO:
    let todos=state.todos;
    todos.push({title:action.payload.title,context:action.payload.context})
    console.log(todos);
    return {...state,todos:todos,changed:!state.changed}
  case constants.DELETE_TODO:
    todos=state.todos
    todos.splice(action.payload,1)
    return {...state,todos:todos,changed:!state.changed}
   default:
     return state;
 }
}
