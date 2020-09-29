import {loadingBarReducer} from 'react-redux-loading'
import {combineReducers} from 'redux'

import authedUser from './autherUser'
import tweets from './tweet'
import users from './users'


export default combineReducers({
    authedUser,
    tweets,
    users,
    loadingBar : loadingBarReducer
});