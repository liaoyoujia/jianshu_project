import {GET_HOME_DATA,GET_MORE_DATA,GET_RECOMMEND}from './constants'

const defaultState={
   homeList:[],
   page:1,
   homeRecommend:[]
}
export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    if(action.type===GET_HOME_DATA){
        newState.homeList=action.value
        return newState        
    }
    if(action.type===GET_MORE_DATA){
        
        newState.homeList=newState.homeList.concat(action.value)

        newState.page=action.page
        return newState
    }
    if(action.type===GET_RECOMMEND){
        
        newState.homeRecommend=action.value
        return newState
    }
    
   return state
}