import { Component, Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Product />
      </Fragment>
    );
  }
}

export default App;
