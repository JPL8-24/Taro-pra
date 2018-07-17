import Taro, { Component } from '@tarojs/taro'
import { View,Image} from '@tarojs/components'
import TodoAdd from '../../components/home/TodoAdd'
import TodoList from '../../components/home/TodoList'
import './index.scss'
import icon1 from '../../static/物理.png'
import icon2 from '../../static/社团.png'
import icon3 from '../../static/航空航天.png'
import icon4 from '../../static/足球.png'

class Index extends Component{
  config={
    navigationBarBackgroundColor: '#ffd5d8'
  }
    render(){
      return(
        <View className='home-container'>
          <View className='pink'/>
          <View className='icon-List'>
            <View className='icon-item'>
              <View className="icon-img">
                <Image src={icon1} className='ima-content'/>
              </View>
            </View>
            <View className='icon-item'>
              <View className="icon-img">
                <Image src={icon2} className='ima-content'/>
              </View>
            </View>
            <View className='icon-item'>
              <View className="icon-img">
                <Image src={icon3} className='ima-content'/>
              </View>
            </View>
            <View className='icon-item'>
              <View className="icon-img">
                <Image src={icon4} className='ima-content'/>
              </View>
            </View>
          </View>
          <TodoAdd/>
          <TodoList/>
        </View>
      )
    }
}
export default Index
