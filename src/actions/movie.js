import {GET_ONSHOW_MOVIE,IS_REQUIRE,GET_ONSHOW_DETAIL} from "../constants/movie"
 export const is_require=()=>{
  return{
    type:IS_REQUIRE
  }
 }
 export const getOnshowMovie=(payload)=>{
  return{
    type:GET_ONSHOW_MOVIE,
    payload
  }
 }
 export const getOnshowDetail=(payload)=>{
  return{
    type:GET_ONSHOW_DETAIL,
    payload
  }
}

