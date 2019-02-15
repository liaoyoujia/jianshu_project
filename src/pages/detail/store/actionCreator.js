import {
    GET_DETAIL_DATA
} from './constants'
import axios from 'axios'
const getData = (data) => ({
    type: GET_DETAIL_DATA,
    value: data,
})


export const getDetailDatas = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then((res) => {
            const data = res.data;
            dispatch(getData(data.data))            
            dispatch(getData(data.data)) 
        }).catch(() => {
            console.log('请求数据错了');

        })
    }

}