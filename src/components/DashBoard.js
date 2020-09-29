import React, {Component} from 'react'
import {connect} from 'react-redux'
import Tweet from './Tweet'

class DashBoard extends React.Component
{
    render()
    {
        console.log(this.props);
        return(
            <div className='center'> 
            <h3 className='center'>Your timeline</h3>
            <ul>

                {this.props.tweetIds.map((id) => (
                    <li key={id} >
                     <Tweet id = {id}/> 
                    </li>
                ))}
            </ul>
                
            </div>
        )
    }
}


function mapStateToProps({tweets,users}){
    return {
        tweetIds: 
        Object.keys(tweets).sort((a,b)=> tweets[a].timestamp - tweets[b].timestamp)
    }
}
export default connect(mapStateToProps)(DashBoard)



