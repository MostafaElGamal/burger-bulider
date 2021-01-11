import { Component } from "react";
import Layout from "hoc/Layout";
import BurgerBulider from "containers/BurderBulider";

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBulider />
      </Layout>
    );
  }
}

export default App;
