import {RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET} from '../actions/tweet'


export default function tweets(state ={}, action)
{
    console.log("Action ", action);
    switch(action.type){
        case RECEIVE_TWEETS:
            console.log(" Receive tweet ", action.tweets);
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_TWEET :
            console.log("in toggle tweet ");
            return {
                ...state,
                [action.id] : {
                    ...state[action.id],
                    likes : action.hasLiked === true ?
                        state[action.id].likes.filter((uid) => uid !== action.authedUser) :
                        state[action.id].likes.concat([action.authedUser])
                        
                }
            }
        case ADD_TWEET:
            console.log(" Adding tweet ")
            const {tweet} = action
            let replyingTo = {}
            if (tweet.replyingTo !== null)
            {
                replyingTo = {
                    [tweet.replyingTo] : {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }
            return {
                ...state,
                [action.tweet.id]:action.tweet,
                ...replyingTo
            }

        default:
            return state;
    }
} 

