import { combineReducers } from 'redux';
import headerRedux from '../common/header/store/redux'
import homeRedux from '../pages/home/store/redux'

const reducer =combineReducers({
header:headerRedux,
home:homeRedux

})
export default reducer