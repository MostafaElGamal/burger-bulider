import { Component } from "react";
import { connect } from "react-redux";
import * as burgerBuilderActions from "store/actions";

import Aux from "hoc/Aux";
import Burger from "components/Burger";
import OrderSummary from "components/OrderSummary";
import Controls from "components/Controls";
import Modal from "components/UI/Modal";
import axios from "plugins/axiosOrders";
import Spinner from "components/UI/Spinner";
import withErrorHandler from "hoc/withErrorHandler";

class BurgerBulider extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  purchaseContinueHandler = async () => {
    this.props.history.push("/checkout");
  };

  purchaseHandler = () => {
    this.setState((prevState, props) => {
      return {
        purchasing: !prevState.purchasing,
      };
    });
  };

  render() {
    let purchaseAble, orderSummary, spinner, burger, controls, burgerBulider;
    purchaseAble = this.props.totalPrice ? false : true;
    spinner = <Spinner />;

    if (this.props.ings) {
      orderSummary = (
        <OrderSummary
          price={this.props.totalPrice}
          ingredients={this.props.ings}
          purchaseCanceled={this.purchaseHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
      burger = <Burger ingredients={this.props.ings} />;
      controls = (
        <Controls
          price={this.props.totalPrice}
          ingredientAdded={this.props.onIngredientAdded}
          ingredientRemoved={this.props.onIngredientRemoved}
          purchaseAble={purchaseAble}
          ordered={this.purchaseHandler}
        />
      );
      burgerBulider = (
        <Aux>
          {burger}
          {controls}
        </Aux>
      );
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
          {orderSummary}
        </Modal>
        {burgerBulider || spinner}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilderReducer.ingredients,
    totalPrice: state.burgerBuilderReducer.totalPrice,
    error: state.burgerBuilderReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (name) =>
      dispatch(burgerBuilderActions.addIngredient(name)),
    onIngredientRemoved: (name) =>
      dispatch(burgerBuilderActions.removeIngredient(name)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
  };
};

const burgerBuliderWithError = withErrorHandler(BurgerBulider, axios);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(burgerBuliderWithError);
