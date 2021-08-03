import React, {Component} from 'react';
import {View} from 'react-native';
import CounterApp from './src/counterApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {counter: state.counter + 1};

    case 'DECREASE':
      return {counter: state.counter - 1};

    default:
      return state;
  }
};

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
