import {
    HAND_INPUT_BLUR,
    HAND_INPUT_FOCUS,
    GET_LIST_DATA,
    INIT_PAGE,
    CHANGE_SHOW,
    CHANGE_FALSES
} from './constants'
import axios from 'axios'
const getData = (data) => ({
    type: GET_LIST_DATA,
    value: data,
    totalPage:Math.ceil(data.length&&data.length/10)
})

export const searchFocus = () => ({
        type: HAND_INPUT_FOCUS
    });

export const searchBlur = () => ({
        type: HAND_INPUT_BLUR
    })

export const changeFalses=()=>({
    type:CHANGE_FALSES
})
export const initPages=(data)=>({
    type:INIT_PAGE,
    value:data
})
export const changeShows=()=>({
    type:CHANGE_SHOW
})

export const getListData = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(getData(data.data))            
        }).catch(() => {
            console.log('请求数据错了');

        })
    }

}