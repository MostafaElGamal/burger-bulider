import { Component } from "react";
import Order from "components/Order";
import axios from "plugins/axiosOrders";
import withErrorHandler from "hoc/withErrorHandler";
import { connect } from "react-redux";
import * as actions from "store/actions";
import Spinner from "components/UI/Spinner";

class Orders extends Component {
  async componentDidMount() {
    this.props.onFetchOrders();
    // this.setState({ loading: false, orders: fetchedOrders });
  }
  render() {
    let ordersComponents;
    ordersComponents = <Spinner />;
    if (this.props.loaading) {
    } else {
      ordersComponents = this.props.orders.map((ele, i) => (
        <Order key={ele.id} order={ele} />
      ));
    }
    return ordersComponents;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withErrorHandler(Orders, axios));
