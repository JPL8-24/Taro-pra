import Taro, { Component } from '@tarojs/taro'
import {connect} from '@tarojs/redux'
import PropType from 'prop-types'
import './TodoList.scss'
const mapStateToProps=(state)=>{
  return{
    Todo:state.Todo.Todo
  }
}
@connect(mapStateToProps)
class TodoList extends Component{
  static propTypes={
    Todo:PropType.array
  }
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props.Todo)
  }
  render(){
    return(
        <ul className='todoList'>
          {
            this.props.Todo.filter((item)=>item.level==="A").map((item,index)=>{
              return <li className="TodoItem A" key={index}>{item.content}</li>
            })
          }
          {
            this.props.Todo.filter((item)=>item.level==="B").map((item,index)=>{
              return <li className="TodoItem B" key={index}>{item.content}</li>
            })
          }
          {
            this.props.Todo.filter((item)=>item.level==="C").map((item,index)=>{
              return <li className="TodoItem C" key={index}>{item.content}</li>
            })
          }
          {
            this.props.Todo.filter((item)=>item.level==="D").map((item,index)=>{
              return <li className="TodoItem D" key={index}>{item.content}</li>
            })
          }
        </ul>
    )
  }
}
export default  TodoList
