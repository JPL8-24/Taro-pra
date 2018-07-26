import Taro,{Component} from '@tarojs/taro'
import {is_require,getOnshowMovie} from "../../actions/movie"
import { connect } from '@tarojs/redux'
import {View,Text,Swiper,Image,Button} from '@tarojs/components'
import './movie.scss'
import API from '../../api/index'
import star from '../../static/星星1.png'
import unstar from '../../static/星星2.png'
const mapStateToProps=(state)=>{
  return{
    movie:state.movie
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    is_require:()=>{
      dispatch(is_require())
    },
    getOnshow:(payload)=>{
      dispatch(getOnshowMovie(payload))
    }
  }
}
@connect(mapStateToProps,mapDispatchToProps)
export default class movie extends Component {
  componentWillMount(){
    if(this.props.movie.isRequire){
      API.getOnshowMovie('成都',0,30,'','').then((res)=>{
        this.props.is_require()
        this.props.getOnshow(res.data.subjects)
      })
    }
  }
 calcStar(grade){
   let list = []
   let max = 5
   let full = parseInt(grade / 2)
   let empty = max - full
   return list = new Array(full).fill('a').concat(new Array(empty).fill('b'))
 }
 go(id,url){
   Taro.navigateTo({
     url:`/pages/MovieDetail/MovieDetail?id=${id}&url=${url}`
   })
 }
  render() {
    return (
      <View className='movie-container'>
        <View className='movie-header'>
          <Vie className='m-header-area'><Text>成都</Text></Vie>
          <View className='m-header-select'>
            <View className='onshow'>正在上映</View>
            <View className='willshow'>即将上映</View>
          </View>
        </View>
        <Swiper className='movie-swiper' autoplay={true} indicator-dots={true} indicator-active-color='#FFC0CB' interval={2000} indicator-color='#fff'>
          {
            this.props.movie.OnShowList.slice(0,9).map((item)=>{
              return <block>
                <swiper-item >
                  <Image src={item.images.medium} className="swiper-item"/>
                </swiper-item>
              </block>
            })
          }
        </Swiper>
        <View className='movie-list'>
          {
            this.props.movie.OnShowList.map((item,index)=>{
              return <View className='movie-item' key={item.id}>
                <View className='movie-content'>
                  <View className='movie-img'>
                    <Image src={item.images.medium}/>
                  </View>
                  <View className='movie-info'>
                    <View className='movie-title'>{item.title}</View>
                    <View className='movie-people'>豆瓣评分:<Text className='grade'>{item.rating.average}</Text></View>
                    <View className='movie-people'>导演:{item.directors.map((item,index)=>{
                      return item.name
                    })}</View>
                    <View className='movie-people'>主演:{
                      item.casts.map((item,index)=>{
                        return item.name
                      })
                    }</View>
                  </View>
                  <View className='movie-detail-button'>
                    <Button className='detail-button' onClick={this.go.bind(this,item.id,item.images.medium)}>详情</Button>
                  </View>
                </View>
                <View className='movie-sepra'></View>
                <View className='movie-start'>
                  <span className='star-text'>评分<span className='star-score'>{item.rating.average}</span></span>
                  {
                    this.calcStar(item.rating.average).filter((item)=>{return item ==='a'}).map((item,index)=>{
                      return <View key={index} className='star'><Image src={star}/></View>
                    })
                  }
                  {
                    this.calcStar(item.rating.average).filter((item)=>{return item ==='b'}).map((item,index)=>{
                      return <View key={index} className='unstar'><Image src={unstar} /></View>
                    })
                  }
                </View>
              </View>
            })
          }
        </View>
      </View>
    )

  }
}

