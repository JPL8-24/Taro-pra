import Taro, {Component} from '@tarojs/taro'
import {View, Text, Swiper, Image, Button,Video} from '@tarojs/components'
import {getOnshowDetail, getOnshowMovie, is_require} from "../../actions/movie"
import star from '../../static/星星1.png'
import unstar from '../../static/星星2.png'
import API from '../../api/index'
import {connect} from '@tarojs/redux'
import './MovieDetail.scss'

const mapStateToProps = (state) => {
  return {
    movie: state.movie
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: (payload) => {
      dispatch(getOnshowDetail(payload))
    }
  }
}
@connect(mapStateToProps, mapDispatchToProps)
export default class MovieDetail extends Component {
  constructor(){
    super()
    this.state={
      url:''
    }
  }
  componentWillMount() {
    console.log(this.$router.params)
    let id = this.$router.params.id
      API.getOnshowMovieDetail(id, '成都', '', '').then((res) => {
        this.props.getDetail(res.data)
      })
    this.setState({
      url:this.$router.params.url
    })
  }
  calcStar(grade){
    let list = []
    let max = 5
    let full = parseInt(grade / 2)
    let empty = max - full
    return list = new Array(full).fill('a').concat(new Array(empty).fill('b'))
  }
  // hasData(obj) {
  //   for (let name in obj) {
  //     if (obj.hasOwnProperty(name)) {
  //       return false
  //     }
  //   }
  //   return true
  // }

  render(){
    return(
      <View className='mdetail-container'>
        <View className='mdetail-header'>
          <View className='mheader-backgroud'>
            <Image src={this.state.url}/>
          </View>

          <View className='mheader-img'>
            <Image src={this.state.url}/>
          </View>
          <View className='mheader-text'>
            <View className='mheader-title'>
              <Text>{this.props.movie.OnShowDetail.title}</Text>
            </View>
            <View className='mheader-title'>
              <Text>{this.props.movie.OnShowDetail.original_title}</Text>
            </View>
            <View className='mheader-grade'>
              <View className='mgrade-grade'>{this.props.movie.OnShowDetail.rating.average}</View>
              <View className='mgrade-star'>
                <View className='mgrade-stars'>
                  {
                    this.calcStar(this.props.movie.OnShowDetail.rating.average).filter((item) => {
                      return item === 'a'
                    }).map((item, index) => {
                      return <View key={index} className='star'><Image src={star}/></View>
                    })
                  }
                  {
                    this.calcStar(this.props.movie.OnShowDetail.rating.average).filter((item) => {
                      return item === 'b'
                    }).map((item, index) => {
                      return <View key={index} className='unstar'><Image src={unstar}/></View>
                    })
                  }
                </View>
                <View className='mgrade-count'>
                  {this.props.movie.OnShowDetail.ratings_count}人评价
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className='mdetail-info'>
          <View className='minfo'>{this.props.movie.OnShowDetail.durations[0]+'    '}{this.props.movie.OnShowDetail.genres.map((item)=>{return item})}</View>
          <View className='minfo'>{this.props.movie.OnShowDetail.pubdates[1]}</View>
          <View className='minfo'>{this.props.movie.OnShowDetail.directors.map((item)=>{return item.name+'(导演)   '})} {this.props.movie.OnShowDetail.casts.map((item)=>{return item.name})}</View>
        </View>
        <View className='mdetail-summary'>
          <View className='msummary-header'>{this.props.movie.OnShowDetail.title}剧情简介</View>
          <View className='msummary-content'>{this.props.movie.OnShowDetail.summary}</View>
        </View>
        <View className='mdetail-casts'>
          <View className='mcasts-header'>演员列表</View>
          <View className='mcasts-content'>
            {
              this.props.movie.OnShowDetail.casts.map((item)=>{
               return <View className='mcontent-item'>
                  <Image
                    src={item.avatars.medium}/>
                  <Text>{item.name}</Text>
                </View>
              })
            }
          </View>
        </View>
        <View className='mdetail-comments'>
          <View className='mcomments-header'>短评({this.props.movie.OnShowDetail.comments_count})</View>
          {
            this.props.movie.OnShowDetail.popular_comments.map((item)=>{
              return <View className='mcomments-items'>
                <View className='mcomments-img'>
                  <Image src={item.author.avatar}/>
                </View>
                <View className='mcoments-content'>
                  <View className='mcoments-user'>{item.author.name}<View className='mgrade-stars'>{
                    this.calcStar(item.rating.value*2).filter((item) => {
                      return item === 'a'
                    }).map((item, index) => {
                      return <View key={index} className='star'><Image src={star}/></View>
                    })
                  }
                    {
                      this.calcStar(item.rating.value*2).filter((item) => {
                        return item === 'b'
                      }).map((item, index) => {
                        return <View key={index} className='unstar'><Image src={unstar}/></View>
                      })
                    }</View></View>
                  <View className='mcoments-date'>{item.created_at}</View>
                  <View className='mcoments-info'>{item.content}
                  </View>
                </View>
              </View>
            })
          }
        </View>
      </View>
    )
  }
}
