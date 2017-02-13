import {createStore} from 'react-redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer);

export default store;
