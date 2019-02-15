import {
    CHANGE_LOGIN,
    CHANGE_LOGINS
} from './constants'
import axios from 'axios'
const changeLogin = () => ({
    type: CHANGE_LOGIN,
})

export const turnLogins=()=>({
    type:CHANGE_LOGINS
})

export const handleLogins = (name,password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account='+name+'password='+password).then((res) => {
            const data = res.data.data;
            if(data){
                dispatch(changeLogin())
            }else{
                console.log('失败');
                
            }
        }).catch(() => {
            console.log('请求数据错了');

        })
    }

}