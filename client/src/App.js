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
                <Route path='/' component={TwentyOneAndOverBox} />
                <Route path='/search' component={ConnectedSearchBar} />
                <Route path='/denied' component={Breweries} />
                <Route path='/searchResults' component={Breweries} />
                {/* <Route path='/searchResults/moreinfo' component={BreweryInfo} />
                <Route path='/favorites/brews' component={FavoritesView} />
                <Route path='/favorites/breweries' component={FavoritesView} />
                <Route path='/profile' component={ProfileView} />
                <Route path='/login' component={LoginView} /> */}
            </Router>
        );
    }
}

export default App;
