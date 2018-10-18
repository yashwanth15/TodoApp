import constants from '../resource/constants'

var initialState ={
  todos:[{title:'Welcome',context:'Click to edit'}],
  changed:false,
  length:1
}

export default (state = initialState, action) => {
 switch(action.type){
   case constants.SAVE_TODO:
    let todos=state.todos;
    todos.push({title:action.payload.title,context:action.payload.context})
    console.log(todos);
    return {...state,todos:todos,changed:!state.changed,length:state.length+1}
  case constants.DELETE_TODO:
    todos=state.todos;
    todos.splice(action.payload,1);
    return {...state,todos:todos,changed:!state.changed,length:state.length-1}
  case constants.EDIT_TODO:
    todos=state.todos;
    todos[action.index]=action.payload;
    return {...state,todos:todos,changed:!state.changed}
  case constants.REPLACE_TODO:
    return {...state,todos:action.payload}
  case constants.CLEAR_DATA:
    return {...state, todos:[{title:'Welcome',context:'Click to edit'}],changed:false,length:1}
   default:
     return state;
 }
}
