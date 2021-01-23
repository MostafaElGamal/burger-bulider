import { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "components/Checkout/CheckoutSummary";
import ContactData from "components/Checkout/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {},
    totalPrice: 0,
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let totalPrice = 0;
    for (const [key, value] of query.entries()) {
      if (key === "price") totalPrice = value;
      ingredients[key] = value;
    }
    this.setState({ ingredients, totalPrice });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCheckoutContinued={this.checkoutContinuedHandler}
          onCheckoutCancelled={this.checkoutCancelledHandler}
        />
        <Route
          path={`${this.props.match.path}/contact-data`}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
