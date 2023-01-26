import React from 'react';
import type { Node } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

import FullScreenBlockSpinner from './src/components/molecules/FullScreenBlockSpinner';

import './src/helpers/i18n';
import rootReducer from './src/rootReducer';

const store = createStore(rootReducer, applyMiddleware(Thunk));

import AppContainer from './src/navigation/AppContainer';

const App: () => Node = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <FullScreenBlockSpinner>
          <AppContainer />
        </FullScreenBlockSpinner>
      </Provider>
    </>
  );
};

export default App;
