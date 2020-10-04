import React, { Component } from 'react'
import {handleInitialData} from '../actions/shared'
import { connect } from 'react-redux'
import DashBoard from './DashBoard'
import  LoadingBar  from 'react-redux-loading';
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

class App extends Component {

  componentDidMount()
  {
    // Store has dispatch in it.
    console.log(" Props in App", this.props);
    console.log(" Initial Data loaded ");
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log("props in app ", this.props.loading);
    return (
      <div>
         <LoadingBar />
         {this.props.loading === true ? null : 
           <TweetPage match = {{params : {id : '8xf0y6ziyjabvozdd253nd'}}} />
        }
      </div>
    )
  }
}


function mapStateToProps({authUser, tweets}) {
  return {
    loading: authUser === null
  }
}

export default connect(mapStateToProps)(App)
