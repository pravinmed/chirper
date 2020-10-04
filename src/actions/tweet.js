import {saveLikeToggle, saveTweet} from '../utils/api';

import { hideLoading, showLoading} from 'react-redux-loading';


export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';
export const ADD_TWEET = 'ADD_TWEET'


export function receiveTweets(tweets) {
    console.log(" In receive tweets ");
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

export function toggleTweet ({id, authedUser, hasLiked}) {
    return {
        type : TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}


function addTweet(tweet){
    return {
        type: ADD_TWEET,
        tweet,
    }
}


export function handleAddTweet({text, replyingTo}) {
    return (dispatch,getState) => {
      
        const {authedUser} = getState();
        console.log(" In HandleAddTweet and id is  ", text, authedUser.id)
      
        dispatch(showLoading());
        return saveTweet({text, 
            author: authedUser.id, 
            replyingTo
        }).
        then((tweet) => dispatch(addTweet(tweet)))
        .then(()=>dispatch(hideLoading()))
    }

}

export function handleToggleTweet(info) {
    return (dispatch) => {
        dispatch(toggleTweet(info))
        return saveLikeToggle(info).catch((e) => {
            dispatch(toggleTweet(info));
            console.warn(" Error in liking ");
        })
    }
}