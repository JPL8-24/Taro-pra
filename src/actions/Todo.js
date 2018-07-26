import {ADD_TODO ,Mark} from "../constants/Todo"
export const add_todo=(todo)=>{
  return{type:ADD_TODO,todo}
}
export const mark_todo = (index)=>{
  return{type:Mark,index}
}
