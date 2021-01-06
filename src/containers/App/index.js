import { Component } from "react";
import Layout from "components/Layout";
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
