import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import Home from './pages/Home'

import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index','pages/Home/index','pages/map/map'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      color:"#b4b4b4",
      selectedColor:"#000000",
      list:[{
        pagePath:"pages/Home/index",
        text:"Home"
      },{
        pagePath:"pages/index/index",
        text:"地图"
      },
        {
          pagePath:"pages/map/map",
          text:"地图"
        }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Home/>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
