import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import TwentyOneAndOverBox from './components/TwentyOneAndOverBox';
import Breweries from './containers/Breweries';
import ConnectedSearchBar from './containers/ConnectedSearchBar.js'
<<<<<<< HEAD
import BreweryMoreInfo from './containers/BreweryMoreInfo.js';
=======
import BreweryInfo from './containers/BreweryInfo.js'
>>>>>>> master

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
<<<<<<< HEAD
                <Route path='/' component={TwentyOneAndOverBox}/>
                <Route path='/home' component={ConnectedSearchBar}/>
                <Route path='/denied' component={Breweries}/>
                <Route path='/searchResults' component={Breweries}/>
                <Route path='/searchResults/moreinfo' component={BreweryMoreInfo} />
=======
                <Route path='/' component={TwentyOneAndOverBox} />
                <Route path='/search' component={ConnectedSearchBar} />
                <Route path='/denied' component={Breweries} />
                <Route path='/searchresults' component={Breweries} />
                <Route path='/searchresults/moreinfo' component={BreweryInfo} />
                {/* <Route path='/favorites/brews' component={FavoritesView} />
                <Route path='/favorites/breweries' component={FavoritesView} />
                <Route path='/profile' component={ProfileView} />
                <Route path='/login' component={LoginView} /> */}
>>>>>>> master
            </Router>
        );
    }
}

export default App;
