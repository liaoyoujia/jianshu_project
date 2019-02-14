import React, { Component } from 'react';
import {GlobalStyle} from "./style.js";
import Header from './common/header/index'
import Home from './pages/home/index'
import { Provider} from 'react-redux'
import store from './store/index'
 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <Header/>
      <Home/>
      </Provider>
      
    );
  }
}

export default App;
