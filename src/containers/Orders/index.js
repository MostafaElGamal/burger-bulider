import { Component } from "react";
import Order from "components/Order";
import axios from "plugins/axiosOrders";
import withErrorHandler from "hoc/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  async componentDidMount() {
    let fetchedOrders;
    try {
      const ordersRes = await axios.get("/orders.json");
      const data = ordersRes.data;
      fetchedOrders = [];
      for (const key in data) {
        const newObject = { ...data[key], id: key };
        fetchedOrders.push(newObject);
      }
    } catch (error) {
      console.log(error);
    }
    this.setState({ loading: false, orders: fetchedOrders });
  }
  render() {
    const ordersComponents = this.state.orders.map((ele, i) => (
      <Order key={ele.id} order={ele} />
    ));
    return ordersComponents;
  }
}

export default withErrorHandler(Orders, axios);
