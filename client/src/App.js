import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import TwentyOneBox from './components/TwentyOneBox'
import Sorry from './components/Sorry.js'
import SearchView from './views/SearchView.js'
import SearchResultsView from './views/SearchResultsView.js'
import SearchResultsMoreInfoView from './views/SearchResultsMoreInfoView.js'
import ProfileView from './views/ProfileView.js'
import FavoriteBrewsView from './views/FavoriteBrewsView.js'
import FavoriteBreweriesView from './views/FavoriteBreweriesView.js'

const App = (props) => (
    <Router history={browserHistory}>
        <Route path='/' component={TwentyOneBox} />
        <Route path='/search' component={SearchView} />
        <Route path='/denied' component={Sorry} />
        <Route path='/searchresults' component={SearchResultsView} />
        <Route path='/searchresults/moreinfo' component={SearchResultsMoreInfoView} />
        <Route path='/favorites/brews' component={FavoriteBrewsView} />
        <Route path='/favorites/breweries' component={FavoriteBreweriesView} />
        <Route path='/profile' component={ProfileView} />
    </Router>
)

export default App;
