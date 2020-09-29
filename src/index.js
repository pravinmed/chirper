import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

import combinedReducer from './reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import middleware from './middleware'



const store = createStore(combinedReducer, middleware);

ReactDOM.render(
  <Provider store = {store}>
    <App />
    </Provider> ,
    document.getElementById('root')
)



