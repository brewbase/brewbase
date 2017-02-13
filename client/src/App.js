import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import TwentyOneAndOverBox from './components/TwentyOneAndOverBox';
import IsOverTwentyOne from './components/IsOverTwentyOne';
import NotOverTwentyOne from './components/NotOverTwentyOne';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={TwentyOneAndOverBox} />
                <Route path='/home' component={IsOverTwentyOne} />
                <Route path='/denied' component={NotOverTwentyOne} />
            </Router>
        );
    }
}

export default App;
