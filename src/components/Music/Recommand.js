import Taro, {Component} from '@tarojs/taro'
import {View, Text, Swiper, Image, Button,Video} from '@tarojs/components'
import API  from '../../api/index'
import erji from '../../static/耳机1.png'
import sq from '../../static/sq.png'
import play from '../../static/播放.png'
import {connect} from '@tarojs/redux'
import {getRecommandList,getNewsongsList} from "../../actions/music"

const mapStateToProps=(state)=>{
  return{
    music:state.music
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getRecommand:(payload)=>{
      dispatch(getRecommandList(payload))
    },
    getNew:(payload)=>{
      dispatch(getNewsongsList(payload))
    }
  }
}
@connect(mapStateToProps,mapDispatchToProps)
export default class Recommand extends Component {
  componentWillMount(){
    if(this.props.music.recommandList.length===0){
      Taro.showLoading({
        title:'正在加载',
        mask:true,
        success:()=>{
          API.getRecommandList().then((res)=>{
            this.props.getRecommand(res.data.result)
          })
          API.getNewsongList().then((res)=>{
            this.props.getNew(res.data.result)
            Taro.hideLoading()
          })
        }
      })
    }
    API.getNewsongList().then((res)=>{
      this.props.getNew(res.data.result)
    })

  }
  goPlay(id,url){
    Taro.navigateTo({
      url:`/pages/MusicPlay/MusicPlay?id=${id}&albumid=${url}`
    })
  }
  goList(id){
    Taro.navigateTo({
      url:`/pages/MusicList/MusicList?id=${id}`
    })
  }
  render() {
    return (
      <View className='recommand-container'>
        <View className='recommand-songsList'>
          <View className='songsList-header'><span>推荐歌单</span></View>
          <View className='songsList'>
            {
              this.props.music.recommandList.map((item)=>{
               return <View className='songsList-item' key={item.id} onClick={this.goList.bind(this,item.id)}>
                  <View className='songsList-img'>
                    <Image src={item.picUrl}/>
                    <span><Image src={erji}/>{item.playCount}</span>
                  </View>
                  <span className='songsList-text'>{item.name}</span>
                </View>
              })
            }
          </View>
        </View>
        <View className='NewsSong-container'>
          <View className='newsong-header'><span>最新歌曲</span></View>
          <View className='newsong-list'>
            {
              this.props.music.NewSongList.map((item,index)=>{
                return <View className='newsong-item' onClick={this.goPlay.bind(this,item.id,item.song.album.id)}>
                  <View className='item-text'>
                    <View className='item-text-top'>{item.name}</View>
                    <View className='item-text-bottom'><span className='icon'><Image src={sq}/></span>{item.song.artists[0].name}-{item.song.album.name}</View>
                  </View>
                  <View className='item-icon'><Image src={play}/></View>
                </View>
              })
            }
            <View className='newsong-item'>
              <View className='item-text'>
                <View className='item-text-top'>Four Leaf Clover (Edit)</View>
                <View className='item-text-bottom'><span className='icon'><Image src={sq}/></span>Four Leaf Clover (Edit)</View>
              </View>
              <View className='item-icon'><Image src={play}/></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
