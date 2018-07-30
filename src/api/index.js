import Taro from '@tarojs/taro'

const apiConfig={
    OnshowMovie:'https://api.douban.com/v2/movie/in_theaters',
    OnshowMovieDetail:'http://api.douban.com/v2/movie/subject/'
}
export default {
  getOnshowMovie:(city,start,count,client='',udid='')=>{
    return Taro.request({
      method: 'GET',
      url: apiConfig.OnshowMovie,
      data:{
        apikey:'0b2bdeda43b5688921839c8ecb20399b',
        city:city,
        start:start,
        count:count,
        client:client,
        udid:udid
      },
      header:{
        'content-type':'application/x-www-form-urlencoded'
      }
    })
  },
  getOnshowMovieDetail:(movieid,city,client='',udid='')=>{
    return Taro.request({
      method:'GET',
      url:`${apiConfig.OnshowMovieDetail}${movieid}`,
      data:{
        apikey:'0b2bdeda43b5688921839c8ecb20399b',
        city:city,
        client:client,
        udid:udid
      },
      header:{
        'content-type':'application/x-www-form-urlencoded'
      }
    })
  },
  getRecommandList:()=>{
      return Taro.request({
        method:'GET',
        url:'http://localhost:3000/personalized'
      })
},
  getNewsongList:()=>{
    return Taro.request({
      method:'GET',
      url:'http://localhost:3000/personalized/newsong'
    })
  },
  getHotMusic:()=>{
    return Taro.request({
      method:'GET',
      url:'http://localhost:3000/top/list',
      data:{
        idx:'1'
      }
    })
  },
  getMusic:(id)=>{
    return Taro.request({
      method:'GET',
      url:'http://localhost:3000/music/url',
      data:{
        id:id
      }
    })
  },
  getAlbumDetail:(id)=>{
    return Taro.request({
      url:'http://localhost:3000/album',
      data:{
        id:id
      }
    })
  },
  getLyric:(id)=>{
    return Taro.request({
      url:'http://localhost:3000/lyric',
      data:{
        id:id
      }
    })
  },
  getSongList:(id)=>{
    return Taro.request({
      url:'http://localhost:3000/playlist/detail',
      data:{
        id
      }
    })
  }
}
