import {GET_RECOMMANDLIST,GET_NEWSONGS_LIST} from "../constants/music"
const INITIAL_STATE={
  recommandList:[],
  NewSongList:[]
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
    default:
      return state
  }
}
