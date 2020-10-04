
import React, {Component} from 'react'
import {connect} from 'react-redux'
import NewTweet from './NewTweet'
import Tweet from './Tweet'

class TweetPage extends Component {
    render()
    {
        const {id, replies} = this.props;
        console.log(" Reply length ",replies.length)
        console.log(" First Reply ", replies[0]);
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
    const {id} = props.match.params;
    console.log(" tweets in TweetPage ",tweets)
  
    console.log(" tweets for id  in TweetPage ",tweets[id])
    return {
        id,
        replies : !tweets[id] ?[] : 
        tweets[id].replies.sort((a,b) =>  tweets[b].timestamp - tweets[a].timestamp)
    }
}



export default connect(mapStateToPros)(TweetPage)