import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import TwentyOneAndOverBox from './components/TwentyOneAndOverBox';
import Breweries from './containers/Breweries';
import ConnectedSearchBar from './containers/ConnectedSearchBar.js'
import BreweryMoreInfo from './containers/BreweryMoreInfo.js';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={TwentyOneAndOverBox}/>
                <Route path='/home' component={ConnectedSearchBar}/>
                <Route path='/denied' component={Breweries}/>
                <Route path='/searchResults' component={Breweries}/>
                <Route path='/searchResults/moreinfo' component={BreweryMoreInfo} />
            </Router>
        );
    }
}

export default App;
