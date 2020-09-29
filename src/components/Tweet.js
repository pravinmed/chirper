
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatTweet, formatDate} from '../utils/helpers'

import { TiArrowBackOutline } from 'react-icons/ti/index'
import { TiHeartOutline } from 'react-icons/ti/index'
import { TiHeartFullOutline } from 'react-icons/ti/index'
import { handleToggleTweet } from '../actions/tweet'

class Tweet extends React.Component
{

    toParent =(e, id)=> {
        e.preventDefault();
    }

    handleLike = (e) => {
        console.log("In handle like ");
       
        e.preventDefault();
        const {dispatch, tweet, authedUser}  = this.props;
        dispatch(handleToggleTweet({
            id:tweet.id,
            hasLiked : tweet.hasLiked,
            authedUser
        }))

    }

    render()
    {
        const {tweet} = this.props;
        const {name, avatar,timestamp,text, hasLiked,likes,replies,id,parent} 
        = tweet;
  
        if (tweet === null) {
            return (<div> Tweet doesnt exists</div>)
        }
        return (
            
            <div className='tweet'>
                <img
                src = {avatar}
                alt = {`Avatar of ${name}`} className='avatar'  />
                 <div className='tweet-info'>
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {parent && (
                            <button className='replyingTo' onClick={ (e)=> this.toParent(e, parent.id)}>
                                Replying to @{parent.author}
                            </button>
                        )}
                        <p>{text}</p>
                  </div>

                     <div className='tweet-icons'>
                         <TiArrowBackOutline className='tweet-icon'></TiArrowBackOutline>
                        <span> {replies !== 0 && replies} </span>
                        <button className='like-button' onClick= {this.handleLike}>
                            {hasLiked=== true ? 
                            <TiHeartFullOutline className='tweet-icon' color='#e03943' /> :
                            <TiHeartFullOutline className='tweet-icon' /> }
                         </button>
                         <span> {likes !==0 && likes}</span>
                    </div>
                </div>    
            
            </div>
        )
    }
}

function mapStateToProps({users, tweets, authedUser}, {id})
{
    console.log(" id ", id);
    
    const tweet = tweets[id];
    console.log(" tweets in Tweet.js ", tweet);
    console.log(" users in Tweet.js ", users);


    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
    return {
        authedUser,
        tweet: formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
    }
}

export default connect(mapStateToProps)(Tweet)