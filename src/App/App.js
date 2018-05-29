import React, { Component, Fragment } from 'react';

import "./App.css"

import Header from "./common/Header"
import Footer from "./common/Footer"
import Main from "./Main"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
