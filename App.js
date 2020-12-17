import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';
import logger from 'redux-logger';
import {Button, Alert} from 'react-native';
import Navigator from './src/modules/navigation';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createPromise} from 'redux-promise-middleware';
import {Provider} from 'react-redux';
import reducers from './src/reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunk,
      createPromise({
        promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
      }),
      logger,
    ),
  ),
);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar  backgroundColor = "#2E86C1"/>
      <Navigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F1F2',
  },
  bg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 250,
  },
  bg1: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 280,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  scrollView: {
    flex: 1,
  },
});

export default App;
