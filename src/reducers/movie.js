import {GET_ONSHOW_MOVIE,IS_REQUIRE,GET_ONSHOW_DETAIL} from "../constants/movie"
 const INITIAL_STATE={
  isRequire:true,
   OnShowList:[],
   OnShowDetail:{}
 }
 export default function movie(state=INITIAL_STATE,action) {
   switch (action.type){
     case IS_REQUIRE:
       return {
         ...state,isRequire:false
       }
     case GET_ONSHOW_MOVIE:
       return {
         ...state,OnShowList:state.OnShowList.concat(action.payload)
       }
     case GET_ONSHOW_DETAIL:
        return {
          ...state,OnShowDetail:JSON.parse(JSON.stringify(action.payload))
        }
     default:
       return state
   }
 }
