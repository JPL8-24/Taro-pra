import Taro,{Component} from '@tarojs/taro'
import {Map,CoverView,CoverImage} from '@tarojs/components'
import QQMapWx from '../../lib/qqmap-wx-jssdk1.0/qqmap-wx-jssdk'
import car1 from '../../static/car.png'
import './map.scss'


class map extends Component{
  constructor(){
    super()
    this.state = {
      longitude:null,
      latitude:null,
      address:null,
      markers:[]
    }
  }
  componentDidMount(){
    this.initPostion()

  }
  initQQmap(){
    let qqmapsdk = new QQMapWx({
      key:'QXSBZ-QR466-H53S4-E5G3H-XGGOZ-POBHQ'
    })
    qqmapsdk.reverseGeocoder({
      location:{
        latitude:this.state.latitude,
        longitude:this.state.longitude
      },
      success:(res)=>{
        this.setState({
          address:res.result.address
        })
      }
    })
    this.initCars()
  }
  initPostion(){
    wx.chooseLocation({
      success:(res)=>{
        this.setState({
          longitude:res.longitude,
          latitude:res.latitude
        },this.initQQmap)
      }
    })
  }
  initCars(){
    let markers=[]
    const carNum = this.getRandomNum(3,8)
    for(let i=0;i<carNum;i++){
      let car={
        id: 0,
        iconPath:'../../static/car.png',
        latitude: 0,
        longitude: 0,
        width: 35,
        height: 15
      }
      const lon_dis = (Math.random())*99*0.00012
      const lat_dis = (Math.random())*99*0.00012
      car.id = i +1;
      car.latitude = this.state.latitude+lon_dis
      car.longitude=this.state.longitude+lat_dis
      markers.push(car)
      console.log(markers)
      this.setState(
        {
          markers:markers
        }
      )
    }
  }
  getRandomNum=(min,max)=>{
    return parseInt(min+(max-min)*Math.random())
  }
  // handleregionChange=(e)=>{
  //   let mapCtx = wx.createMapContext('map')
  //   mapCtx.getCenterLocation({
  //     success:(res)=>{
  //       this.setState({
  //         longitude:res.longitude,
  //         latitude:res.latitude
  //       },this.initQQmap)
  //     }
  //   })
  //
  // }
  render(){
    return(
      <Map className="map" id='map' longitude={this.state.longitude} latitude={this.state.latitude} show-location markers={this.state.markers}>
        <CoverView className='position-infomation' onClick={this.initPostion}>
          <CoverView>{this.state.address}</CoverView>
        </CoverView>
      </Map>
    )
  }

}


export default  map;
