import React, { Component, Fragment } from "react";
import { HashRouter, Route } from "react-router-dom";
// import Header from "./UHF/Header.js";
import Footer from "./UHF/Footer.js";
import Dashboard from "./Dashboard/Dashboard.js";
// maybe the code splitting in index.js messing up routes?

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "????"
    };
  }
  render() {
    return (
      <HashRouter>
        <Fragment>
          {/* <Menu current={this.state.current} /> */}
          <Route exact path="/" component={Dashboard} />
          <Footer />
        </Fragment>
      </HashRouter>
    );
  }
}
