import {HAND_INPUT_BLUR,HAND_INPUT_FOCUS,GET_LIST_DATA,INIT_PAGE,CHANGE_SHOW,CHANGE_FALSES}from './constants'

const defaultState={
    isLong:false,
    listData:[],
    page:1,
    totalPage:1,
    isShow:false
}
export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    if(action.type===HAND_INPUT_BLUR){
        newState.isLong=false
        return newState        
    }
    if(action.type===GET_LIST_DATA){
        
        newState.listData=action.value
        newState.totalPage=action.totalPage
        return newState
    }
    if(action.type===HAND_INPUT_FOCUS){
        newState.isLong=true
        return newState
    }
    if(action.type===INIT_PAGE){
        newState.page=action.value
        return newState
    }
    if(action.type===CHANGE_SHOW){
        newState.isShow=true
        return newState

    }
    if(action.type===CHANGE_FALSES){
        newState.isShow=false
        return newState

    }
    
   return state
}