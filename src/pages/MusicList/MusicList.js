import Taro, {Component} from '@tarojs/taro'
import {View, Text, Swiper, Image, Button,Video} from '@tarojs/components'
import API from '../../api/index'
import {getSongsList} from "../../actions/music"
import {connect} from '@tarojs/redux'
import sq from '../../static/sq.png'
import play from '../../static/播放.png'
import './MusicList.scss'
const mapStateToProps=(state)=>{
  return{
    music:state.music
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getList:(payload)=>{
      dispatch(getSongsList(payload))
    }
  }
}
@connect(mapStateToProps,mapDispatchToProps)
export default class MusicList extends Component{
  componentWillMount(){
    let id = this.$router.params.id
    API.getSongList(id).then((res)=>{
      this.props.getList(res.data.playlist)
    })
  }
  goPlay(id,url){
    Taro.navigateTo({
      url:`/pages/MusicPlay/MusicPlay?id=${id}&albumid=${url}`
    })
  }
  render(){
    return(
        <View className='playlist-container'>
          <View className='playlist-header'>
            <View className='plheader-background'><Image src={this.props.music.songsList.coverImgUrl}/></View>
            <View className='plheader-content'>
              <View className='plheader-img'><Image src={this.props.music.songsList.coverImgUrl}/></View>
              <View className='plheader-text'><Text>{this.props.music.songsList.name}</Text></View>
            </View>
          </View>
          <View className='playlist-des'>
            <View className='list-tags'>
              标签:
              {
                this.props.music.songsList.tags.map((item)=>{
                 return <em className='list-tag'>{item}</em>
                })
              }
            </View>
            <View className='pl-into'>
              <View className='f-brk'>
                <span><i>简介:{this.props.music.songsList.description}</i></span>
              </View>
            </View>
          </View>
          <View className='NewsSong-container'>
            <View className='newsong-header'><span>歌曲列表</span></View>
            <View className='newsong-list'>
            {
              this.props.music.songsList.tracks.map((item)=>{
               return <View className='newsong-item' onClick={this.goPlay.bind(this,item.id,item.al.id)}>
                  <View className='item-text'>
                    <View className='item-text-top'>{item.name}({item.alia[0]})</View>
                    <View className='item-text-bottom'><span className='icon'><Image src={sq}/></span>{item.ar[0].name}-{item.al.name}</View>
                  </View>
                  <View className='item-icon'><Image src={play}/></View>
                </View>
              })
            }
            </View>
          </View>
        </View>
      )

  }
}
