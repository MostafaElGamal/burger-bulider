import * as actionTypes from "../actions/actionsTypes";

const intialState = {
  ingredients: null,
  error: false,
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

    case actionTypes.SET_INGREDIENTS:
      newState.ingredients = action.ingredients;
      newState.error = false;
      break;

    case actionTypes.FETCH_INGREDIENTS_FAILD:
      newState.error = true;
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
