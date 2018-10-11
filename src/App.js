import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import SplashScreen from 'react-native-splash-screen';

import Router from './routes';

if (__DEV__) {
  //require('react-devtools');
}

export default class App extends React.Component {

  componentDidMount() {
    SplashScreen.hide();
  }


  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }} >
            <StatusBar
              hidden
            />
            <Router></Router>
          </View>
        </PersistGate >
      </Provider>
    );
  }
}