import {GET_RECOMMANDLIST,GET_NEWSONGS_LIST,GET_HOTMUSIC_LIST,GET_SONG_DETAIL,GET_SONGS_LIST} from "../constants/music"
const INITIAL_STATE={
  recommandList:[],
  NewSongList:[],
  HotSongList:[],
  songDetail:{
    url:'',
    picUrl:'',
    lyric:''
  },
  songsList:{}
}

export default function music(state=INITIAL_STATE,action){
  switch (action.type){
    case GET_RECOMMANDLIST:
      return {
        ...state,recommandList:action.payload.slice(0,6)
      }
    case GET_NEWSONGS_LIST:
      return{
        ...state,NewSongList:action.payload.slice()
      }
    case  GET_HOTMUSIC_LIST:
      return{
        ...state,HotSongList:action.payload.slice(0,20)
      }
    case GET_SONG_DETAIL:
      return{
        ...state,songDetail:JSON.parse(JSON.stringify(action.payload))
      }
    case GET_SONGS_LIST:
      return{
        ...state,songsList:JSON.parse(JSON.stringify(action.payload))
      }
    default:
      return state
  }
}
