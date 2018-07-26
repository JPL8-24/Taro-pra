import Taro, {Component} from '@tarojs/taro'
import {View, Text, Swiper, Image, Button,Video} from '@tarojs/components'
import Recommand from '../../components/Music/Recommand'
import Hot from '../../components/Music/Hot'
import './Music.scss'
export default class Music extends Component {
  constructor(){
    super()
    this.state={
      recommand:true,
      hot:false,
      search:false
    }
  }
  Recommand=()=>{
    this.setState({
      recommand:true,
      hot:false,
      search:false
    })
  }
  Hot=()=>{
    this.setState({
      recommand:false,
      hot:true,
      search:false
    })
}
  search=()=>{
    this.setState({
      recommand:false,
      hot:false,
      search:true
    })
  }
  render(){
    return(
      <View className='MusicContainer'>
        <ul className='Music-tapBar'>
          <li className='tabtitle'><View className={`taptxt ${this.state.recommand===true?'selected':''}`} onClick={this.Recommand.bind(this)} >推荐歌曲</View></li>
          <li className='tabtitle' ><View className={`taptxt ${this.state.hot===true?'selected':''}`} onClick={this.Hot.bind(this)}>热门歌曲</View></li>
          <li className='tabtitle' ><View className={`taptxt ${this.state.search===true?'selected':''}`} onClick={this.search.bind(this)}>搜索</View></li>
        </ul>
        {this.state.recommand&&<Recommand/>}
        {this.state.hot&&<Hot/>}
        {this.state.search&&<View>33</View>}
      </View>
    )
  }
}
