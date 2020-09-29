import {getInitialData} from '../utils/api'
import {receiveTweets} from './tweet'
import {receiveUsers} from './users'
import {setAuthedUser} from './authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'
// Initial data handling.
// dispatch() will call the actions and is sent to the reducers
const AUTHED_ID = ['tylermcginnis'];
export function handleInitialData()
{
    console.log(" Handle Initial Data ");
    return (dispatch)=>{
        dispatch(showLoading());
       return  getInitialData().then
       (({users,tweets}) => {
        dispatch(receiveUsers(users)); 
        dispatch(receiveTweets(tweets));
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
       });
    };
}