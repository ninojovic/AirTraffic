import React, { Component, Fragment } from 'react';

import "./App.css"

import Header from "./common/Header"
import Footer from "./common/Footer"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          {/* <Main /> */}
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
