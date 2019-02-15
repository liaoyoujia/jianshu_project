import {CHANGE_LOGIN,CHANGE_LOGINS}from './constants'

const defaultState={
  isLogin:false
}
export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    if(action.type===CHANGE_LOGIN){
        newState.isLogin=true
        return newState        
    }
    if(action.type===CHANGE_LOGINS){
        newState.isLogin=false
        return newState        
    }
    
   return state
}