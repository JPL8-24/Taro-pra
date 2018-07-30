import Taro, {Component} from '@tarojs/taro'
import {View, Text, Swiper, Image, Button,Video} from '@tarojs/components'
import API from '../../api/index'
import {connect} from '@tarojs/redux'

export default class MusicList extends Component{
  componentWillMount(){
    API.getSongList()
  }
  render(){
    return(
        <View>
          111
        </View>
      )

  }
}
