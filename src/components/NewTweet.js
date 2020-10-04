import React , {Component} from 'react'
import { LoadingBar } from 'react-redux-loading'
import {connect} from 'react-redux'
import {handleAddTweet} from '../actions/tweet'


class NewTweet extends Component
{
    state = {
        text : ''
    }

    handleChange = (e) => {
        const text = e.target.value
        console.log(" Tweet is ",text)
        this.setState( ()=> ({
            text
        }))
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {text} = this.state;
       
        const {dispatch, id} = this.props;
        console.log("New Tweet and id  ", text,id);
       
        dispatch(handleAddTweet({text,id}));
        this.setState(()=>({
            text :'',
        }))
        console.log(" New text is ", text);
    }

    render() {
        const {text} = this.state;
        const tweetLeft = 288 - text.length;
        return (
            <div>
                <h3 className='center'> Create New Tweet </h3>
                <form onSubmit = {this.handleSubmit}>
                  <textarea 
                     className ='new-tweet' placeholder='Whats up' onChange = {this.handleChange}
                     maxLength={280} value = {text}  >

                  </textarea>
                    {tweetLeft <= 100  && (<div className='len'> {tweetLeft} </div>)}
                  <button className='btn' type = 'submit' disabled={text === ''}  >
                    Submit
                  </button>
                </form>
            </div>
        )
    }
}
export default connect()(NewTweet);