import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from './App';
import DevTools from './DevTools';
import injectTapEventPlugin from "react-tap-event-plugin";

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

module.exports = class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <AppContainer />
          <DevTools />
        </div>
      </Provider>
    );
  }
};
