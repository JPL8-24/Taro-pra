import Taro, {Component} from '@tarojs/taro'
import {View, Text, Swiper, Image, Button,Video} from '@tarojs/components'
import API from '../../api/index'
import {connect} from '@tarojs/redux'
import {getSongDetail} from "../../actions/music"
import play1 from '../../static/播放1.png'
import './MusicPlay.scss'

const mapStateToProps=(state)=>{
  return{
    music:state.music
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getDetail:(payload)=>{
      dispatch(getSongDetail(payload))
  }
  }
}
@connect(mapStateToProps,mapDispatchToProps)
export default class MusicPlay extends Component{
  constructor(){
    super()
    this.state={
      playing:false,
      audio:wx.createInnerAudioContext()
    }
  }
  componentWillMount(){
    console.log(this.props)
    let songDetail={
        url:'',
        picUrl:'',
        lyric:'',
        name:'',
        ar:''
    }
    API.getMusic(this.$router.params.id).then((res)=>{
      songDetail.url=res.data.data[0].url
      return  API.getAlbumDetail(this.$router.params.albumid)
    }).then((res)=>{
      songDetail.picUrl=res.data.album.picUrl
      songDetail.name=res.data.album.name
      songDetail.ar=res.data.songs[0].ar[0].name
      return API.getLyric(this.$router.params.id)
    }).then((res)=>{
      songDetail.lyric=res.data.lrc.lyric
      this.props.getDetail(songDetail)
    })
  }
  componentWillUnmount(){
    this.state.audio.stop()
  }
  syncSetState(state){
    return new Promise((resolve,reject)=>{
      this.setState(state,resolve)
    })
  }
 async play(){
   if(this.state.playing===false){
     await this.syncSetState({
       playing:true
     })
     this.state.audio.src=this.props.music.songDetail.url
     this.state.audio.play()
     console.log(this.state)
   }else if (this.state.playing===true){
     await this.syncSetState({
       playing:false
     })
     this.state.audio.pause()
     console.log(this.state)
   }
 }
  render(){
    return(
      <View className='musicplay-container'>
        <View className='musicplay-background'><Image
          src={this.props.music.songDetail.picUrl}/></View>
        <View className='musicplay-content'>
          <View className={`musicimg ${this.state.playing?'play':''}`} onClick={this.play}><Image
            src={this.props.music.songDetail.picUrl}/>
            {
              !this.state.playing&&<span className='music-play'><Image src={play1}/></span>
            }
          </View>
          <View className='musicinfo'>
            <span className='musicename'>{this.props.music.songDetail.name}</span>
            <span className='musicename'>-</span>
            <span className='musicart'>{this.props.music.songDetail.ar}</span>
          </View>
        </View>
      </View>
    )
  }
}
