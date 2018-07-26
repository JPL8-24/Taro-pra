import Taro,{Component} from '@tarojs/taro'
import {View,Image} from '@tarojs/components'
import star from '../../static/星星1.png'
import unstar from '../../static/星星2.png'

export default class Star extends Component{

constructor(props){
  super(props)
  this.state={
    list:[]
  }
}
componentWillMount() {
  console.log(this.props.grade)
  console.log(this.state)
  let max=5
  let full=parseInt(this.props.grade/2)
  let empty=max-full
  this.setState({
    list:new Array(full).fill('a').concat(new Array(empty).fill('b'))
  })
}
  render(){
    return(
      <View>
        <span className='star-text'>评分<span className='star-score'>{this.props.grade}</span></span>
        {
          this.state.list.filter((item)=>{return item ==='a'}).map((item,index)=>{
            return <View key={index} className='star'><Image src={star}/></View>
          })
        }
        {
          this.state.list.filter((item)=>{return item ==='b'}).map((item,index)=>{
            return <View className='unstar' key={index}><Image src={unstar}/></View>
          })
        }
      </View>
    )
  }
}
