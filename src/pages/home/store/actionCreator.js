import {
    GET_MORE_DATA,
    GET_HOME_DATA,
    GET_RECOMMEND
} from './constants'
import axios from 'axios'
const getData = (data) => ({
    type: GET_HOME_DATA,
    value: data,
})
const geMoretData = (data,page) => ({
    type: GET_MORE_DATA,
    value: data,
    page
})
const getRecommend=(data)=>({
    type:GET_RECOMMEND,
    value:data
})

export const getMoreLists = (page) => {
    
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then((res) => {
            const data = res.data;
            dispatch(geMoretData(data.data,page+1))            
        }).catch(() => {
            console.log('请求数据错了');

        })
    }

}

export const getHomeDatas = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const data = res.data;
            dispatch(getData(data.data.articleList))            
            dispatch(getRecommend(data.data.recommendList))
        }).catch(() => {
            console.log('请求数据错了');

        })
    }

}