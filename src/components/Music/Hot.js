import Taro, {Component} from '@tarojs/taro'
import {View, Text, Swiper, Image, Button,Video} from '@tarojs/components'
import {getHotList} from "../../actions/music"
import API  from '../../api/index'
import {connect} from '@tarojs/redux'
import sq from '../../static/sq.png'
import play from '../../static/播放.png'
const mapStateToProps=(state)=>{
  return{
    music:state.music
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getHot:(payload)=>{
      dispatch(getHotList(payload))
    }
  }
}
@connect(mapStateToProps,mapDispatchToProps)
export default class Hot extends Component{
  componentWillMount(){
    API.getHotMusic().then((res)=>{
      this.props.getHot(res.data.playlist.tracks)
    })
  }
  goPlay(id,url){
    Taro.navigateTo({
      url:`/pages/MusicPlay/MusicPlay?id=${id}&albumid=${url}`
    })
  }
  render(){
    return(
      <View className='hotMusic-container'>
        <View className='hotmusic-header'>
           <Image src='http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg'/>
          <View className='hotheader-date'>更新日期:07月26日</View>
        </View>
        <View className='hotsongsList'>
          {
            this.props.music.HotSongList.map((item,index)=>{
              return <View className='hotsong-item' onClick={this.goPlay.bind(this,item.id,item.al.id)}>
                <View className={`item-ranking ${index<3?'top3':''}`}>{index}</View>
                <View className='item-text'>
                  <View className='item-text-top'>{item.name}</View>
                  <View className='item-text-bottom'><spaçn className='icon'><Image src={sq}/></spaçn>{item.ar[0].name}-{item.al.name}</View>
                </View>
                <View className='item-icon'><Image src={play}/></View>
              </View>
            })
          }
        </View>
      </View>
    )
  }

}
