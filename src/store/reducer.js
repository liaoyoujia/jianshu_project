import { combineReducers } from 'redux';
import headerRedux from '../common/header/store/redux'

const reducer =combineReducers({
header:headerRedux

})
export default reducer