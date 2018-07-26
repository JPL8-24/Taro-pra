import { combineReducers } from 'redux'
import counter from './counter'
import Todo from './Todo'
import  movie from './movie'
import music from './music'

export default combineReducers({
  counter,
  Todo,
  movie,
  music
})
