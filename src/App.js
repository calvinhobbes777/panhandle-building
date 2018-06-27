import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Home/Header";
import Why from "./Home/Why";
import Services from "./Home/Services";
import Steps from "./Home/Steps";
import Footer from "./Home/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Why />
          <Services />
          <Steps />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
