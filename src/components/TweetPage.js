
import React, {Component} from 'react'
import {connect} from 'react-redux'
import NewTweet from './NewTweet'
import Tweet from './Tweet'

class TweetPage extends Component {
    render()
    {
        const {id, replies} = this.props;
        return (
            <div>
                TWEET PAGE 
                <Tweet id = {id} />
                <NewTweet id = {id} />
                {replies.length !== 0 && <h3 className = 'center'>Replies</h3>}
                <ul>
                    {replies.map((tweetId) => (
                        <li key={tweetId}>
                            <Tweet id = {tweetId} />
                        </li>
                    ))}
                </ul>

            </div>            
        )
    }

}

function mapStateToPros({authedUser, tweets,users}, props){
    console.log(" Props ", props);
    console.log(" Tweets in TweetPage ", tweets);
    const {id} = props.match.params;
    return {
        id,
        replies : !tweets[id] ?[] : 
        tweets[id].replies.sort((a,b) => { tweets[a].timestamp - tweets[b].timestamp})
    }
}



export default connect(mapStateToPros)(TweetPage)