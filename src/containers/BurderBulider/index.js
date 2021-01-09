import { Component } from "react";
import Aux from "hoc/Aux";
import Burger from "components/Burger";
import OrederSummary from "components/OrederSummary";
import Controls from "components/Controls";
import Modal from "components/UI/Modal";

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

  purchaseHandler = () => {
    this.setState((prevState, props) => {
      return {
        purchasing: !prevState.purchasing,
      };
    });
  };

  render() {
    const purchaseAble = this.state.totalPrice ? false : true;
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
          <OrederSummary ingredients={this.state.ingredients} />
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
