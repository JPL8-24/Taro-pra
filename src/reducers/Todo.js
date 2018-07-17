import {ADD_TODO,Mark} from "../constants/Todo"

const INITIAL_STATE = {
  Todo:[{
    content:'学习',level:'A'
  },
    {
      content:'打球',level:'B'
    }]
}

export default function Todo (state = INITIAL_STATE, action) {
      switch (action.type){
        case ADD_TODO:
          return {...state,Todo:state.Todo.concat(action.todo)}
        default:
          return state
      }
}
