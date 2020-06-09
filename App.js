import React from 'react';
import MainNavigation from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { reducers } from './src/redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;