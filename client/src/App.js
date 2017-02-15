import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';
import TwentyOneAndOverBox from './components/TwentyOneAndOverBox';
import Breweries from './containers/Breweries';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Breweries} />
                <Route path='/denied' component={Breweries} />
            </Router>
        );
    }
}

export default App;
