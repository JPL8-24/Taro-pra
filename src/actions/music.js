import {GET_RECOMMANDLIST,GET_NEWSONGS_LIST} from "../constants/music"

export const getRecommandList=(payload)=>{
  return{
    type:GET_RECOMMANDLIST,
    payload
  }
}

export const getNewsongsList=(payload)=>{
  return{
    type:GET_NEWSONGS_LIST,
    payload
  }
}
