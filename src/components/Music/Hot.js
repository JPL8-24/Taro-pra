import Taro, {Component} from '@tarojs/taro'
import {View, Text, Swiper, Image, Button,Video} from '@tarojs/components'
import API  from '../../api/index'
import {connect} from '@tarojs/redux'
export default class Hot extends Component{
  componentWillMount(){
    API.getHotMusic().then((res)=>{
      console.log(res)
    })
  }
  render(){
    return(
      <View>
        111
      </View>
    )
  }

}
