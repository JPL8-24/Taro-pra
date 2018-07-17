import Taro, { Component } from '@tarojs/taro'
import {View,Input,Button} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {add_todo} from "../../actions/Todo"
import PropType from 'prop-types'
const mapStateToProps= (state)=> {
  return {
    Todo:state.Todo
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    onSubmit:(todo)=>{
      dispatch(add_todo(todo))
    }
  }
}
@connect(mapStateToProps,mapDispatchToProps)


class TodoAdd extends Component{
  static propTypes={
    onSubmit:PropType.func
  }
  constructor(props){
    super(props)
    this.state = {
      level:'',
      content:''
    }
  }

  componentWillUnmount () {
    console.log(this.props)
  }


  componentDidShow () { }

  componentDidHide () { }


  handleLevelChange=(e)=>{
    this.setState({
      level:e.target.value
    })
  }
  handleTodoChange=(e)=>{
    this.setState({
      content:e.target.value
    })
  }
  handleSubmit=()=>{
    if(this.props.onSubmit){
      this.props.onSubmit({
        level:this.state.level,
        content:this.state.content
      })
    }
    console.log(this.props.Todo)
    this.setState({
      level:'',
      content:''
    })
}
    render(){
      return(
        <View>
          <View>
            <span>level</span>
            <Input value={this.state.level} onInput={this.handleLevelChange}/>
          </View>
          <View>
            <span>Todo</span>
            <Input value={this.state.content} onInput={this.handleTodoChange}/>
            <Button onClick={this.handleSubmit}>+</Button>
          </View>
        </View>
      )
    }
}

// TodoAdd=connect(mapStateToProps,mapDispatchToProps)(TodoAdd)
export default TodoAdd
