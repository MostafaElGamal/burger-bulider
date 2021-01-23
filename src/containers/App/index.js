import { Component } from "react";
import Layout from "hoc/Layout";
import BurgerBulider from "containers/BurderBulider";
import Checkout from "containers/Checkout";
import Orders from "containers/Orders";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/orders" component={Orders} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={BurgerBulider} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
