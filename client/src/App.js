import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import TwentyOneAndOverBox from './components/TwentyOneAndOverBox';
import Breweries from './containers/Breweries';
import ConnectedSearchBar from './containers/ConnectedSearchBar.js'
//import SearchResults from './components/SearchResults'

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={TwentyOneAndOverBox}/>
                <Route path='/home' component={ConnectedSearchBar}/>
                <Route path='/denied' component={Breweries}/>
                <Route path='/searchResults' component={Breweries}/>
            </Router>
        );
    }
}

export default App;
