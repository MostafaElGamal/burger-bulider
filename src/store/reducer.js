import * as actionTypes from "./actions";

const intialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  },
  totalPrice: 0,
};

const INGREDIENT_PRICES = {
  salad: 0.4,
  bacon: 0.7,
  cheese: 1.2,
  meat: 1,
};

const reducer = (state = intialState, action) => {
  const newState = { ...state };
  const ingredientName = action.ingredientName;

  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      newState.ingredients = {
        ...newState.ingredients,
        [ingredientName]: state.ingredients[ingredientName] + 1,
      };
      newState.totalPrice =
        state.totalPrice + INGREDIENT_PRICES[ingredientName];
      break;
    case actionTypes.REMOVE_INGREDIENT:
      newState.ingredients = {
        ...newState.ingredients,
        [ingredientName]: state.ingredients[ingredientName] - 1,
      };
      newState.totalPrice =
        state.totalPrice - INGREDIENT_PRICES[ingredientName];
      break;

    default:
      break;
  }
  return newState;
};

export default reducer;
