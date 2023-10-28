// store/index.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reviewReducer from './reducer';

const rootReducer = combineReducers({
  reviews: reviewReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
