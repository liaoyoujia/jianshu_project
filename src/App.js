import React, { Component } from 'react';
import {GlobalStyle} from "./style.js";
import Header from './common/header/index'
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home/index'
import Detail from './pages/detail/index'
import { Provider} from 'react-redux'
import store from './store/index'
 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <Header/>
      <BrowserRouter>
      <div>
      <Route path='/' exact component={Home}></Route>
      <Route path='/detail' exact component={Detail}></Route>
      </div>
     
      </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;
