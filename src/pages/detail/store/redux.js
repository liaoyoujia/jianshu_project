import {GET_DETAIL_DATA,}from './constants'

const defaultState={
  detailListData:[],
}
export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    if(action.type===GET_DETAIL_DATA){
        newState.detailListData=action.value
        return newState        
    }
    
   return state
}