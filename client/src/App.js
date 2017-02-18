import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import TwentyOneBox from './components/TwentyOneBox'
import Sorry from './components/Sorry.js'
import SearchView from './views/SearchView.js'
import SearchResultsView from './views/SearchResultsView.js'
import SearchResultsMoreInfoView from './views/SearchResultsMoreInfoView.js'
import ProfileView from './views/ProfileView.js'
import FavoritesView from './views/FavoritesView.js'

const App = (props) => (
    <Router history={browserHistory}>
        <Route path='/' component={TwentyOneBox} />
        <Route path='/search' component={SearchView} />
        <Route path='/denied' component={Sorry} />
        <Route path='/searchresults' component={SearchResultsView} />
        <Route path='/searchresults/moreinfo' component={SearchResultsMoreInfoView} />
        <Route path='/favorites' component={FavoritesView} />
        <Route path='/profile' component={ProfileView} />
    </Router>
)

export default App;
