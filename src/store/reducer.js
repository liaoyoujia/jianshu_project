import { combineReducers } from 'redux';
import headerRedux from '../common/header/store/redux'
import homeRedux from '../pages/home/store/redux'
import detailRedux from '../pages/detail/store/redux'
import loginRedux from '../pages/login/store/redux'

const reducer =combineReducers({
header:headerRedux,
home:homeRedux,
detail:detailRedux,
login:loginRedux
 
})
export default reducer