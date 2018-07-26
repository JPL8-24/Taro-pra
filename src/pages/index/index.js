import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image} from '@tarojs/components'

import './index.scss'
import b from '../../static/任务.png'
import c from '../../static/电影.png'
import d from '../../static/音乐.png'

class Index extends Component {
  config = {
    navigationBarTitleText: 'Home'
  }

  constructor() {
    super()
    this.state = {
      list: [{
        title: '任务管理',
        url: '../../static/任务.png',
        nav:'MovieDetail'
      },
        {
          title: '电影资讯',
          url: '../../static/电影.png',
          nav:'movie'
        },
        {
          title: '音乐资讯',
          url: '../../static/音乐.png',
          nav:'Music'
        }]
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goTo(src){
    console.log(src)
    Taro.navigateTo({
      url:`/pages/${src}/${src}`
    })
  }
  render () {
    return (
      <View className='main-container'>
        <View className='main-title'>
          <Text className='main-title1'>大川视通</Text>
          <Text className='main-title2'>任务管理平台和综合信息中心</Text>
          <Text className='main-title3'>个人任务管理平台和电影资讯音乐资讯信息平台</Text>
        </View>
        {
          this.state.list.map((item,index)=>{
            return <View className='main-list' key={index} onClick={this.goTo.bind(this,item.nav)}>
              <Image src={item.url} className='mainlist-img'/>
              <Text>{item.title}</Text>
            </View>
          })
        }
      </View>

    )
  }
}

export default Index
