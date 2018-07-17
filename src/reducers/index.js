import { combineReducers } from 'redux'
import counter from './counter'
import Todo from './Todo'

export default combineReducers({
  counter,
  Todo
})
