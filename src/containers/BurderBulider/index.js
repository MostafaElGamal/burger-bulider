import { Component } from "react";
import Aux from "hoc/Aux";
import Burger from "components/Burger";
import OrderSummary from "components/OrderSummary";
import Controls from "components/Controls";
import Modal from "components/UI/Modal";
import axios from "plugins/axiosOrders";
import Spinner from "components/UI/Spinner";
const INGREDIENT_PRICES = {
  salad: 0.4,
  bacon: 0.7,
  cheese: 1.2,
  meat: 1,
};

class BurgerBulider extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasing: false,
    loading: false,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const ingredients = { ...this.state.ingredients };
    ingredients[type] = oldCount + 1;
    const priceAddttion = INGREDIENT_PRICES[type];
    const totalPrice = this.state.totalPrice + priceAddttion;
    this.setState({
      totalPrice,
      ingredients,
    });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const ingredients = { ...this.state.ingredients };
    ingredients[type] = oldCount - 1;
    if (oldCount <= 0) return;
    const priceDeduction = INGREDIENT_PRICES[type];
    const totalPrice = this.state.totalPrice - priceDeduction;
    this.setState({
      totalPrice,
      ingredients,
    });
  };

  purchaseContinueHandler = async () => {
    this.setState({ loading: true, purchasing: false });
    const order = {
      ingredients: this.state.ingredients,
      pirce: this.state.totalPrice,
      customer: {
        name: "Mustafa",
        email: "testawy@testawy.com",
        deliveryMethod: "fast",
        address: {
          street: "Giza",
          zipCode: "121",
          country: "Egypt",
        },
      },
    };
    try {
      await axios.post("orders.json", order);
      this.setState({ loading: false, purchasing: false });
    } catch (error) {
      console.log("[error] purchaseContinueHandler", error);
    }
  };

  purchaseHandler = () => {
    this.setState((prevState, props) => {
      return {
        purchasing: !prevState.purchasing,
      };
    });
  };

  render() {
    let purchaseAble, orderSummary, spinner;
    purchaseAble = this.state.totalPrice ? false : true;
    orderSummary = (
      <OrderSummary
        price={this.state.totalPrice}
        ingredients={this.state.ingredients}
        purchaseCanceled={this.purchaseHandler}
        purchaseContinued={this.purchaseContinueHandler}
      />
    );
    spinner = <Spinner />;
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
          {this.state.loading ? spinner : orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <Controls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          purchaseAble={purchaseAble}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBulider;
