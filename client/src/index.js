import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import TwentyOneAndOverBox from './components/TwentyOneAndOverBox';
import IsOverTwentyOne from './components/IsOverTwentyOne';
import NotOverTwentyOne from './components/NotOverTwentyOne';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={TwentyOneAndOverBox} />
        <Route path='/home' component={IsOverTwentyOne} />
        <Route path='/denied' component={NotOverTwentyOne} />
    </Router>,
    document.getElementById('root')
);
