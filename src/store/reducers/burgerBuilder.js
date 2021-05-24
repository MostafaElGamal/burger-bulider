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

const addIngredient = (state, newState, action) => {
  const ingredientName = action.ingredientName;

  newState.ingredients = {
    ...newState.ingredients,
    [ingredientName]: state.ingredients[ingredientName] + 1,
  };
  newState.totalPrice = state.totalPrice + INGREDIENT_PRICES[ingredientName];
  return newState;
};

const removeIngredient = (state, newState, action) => {
  const ingredientName = action.ingredientName;
  newState.ingredients = {
    ...newState.ingredients,
    [ingredientName]: state.ingredients[ingredientName] - 1,
  };
  newState.totalPrice = state.totalPrice - INGREDIENT_PRICES[ingredientName];
  return newState;
};

const setIngredients = (newState, action) => {
  newState.ingredients = action.ingredients;
  newState.totalPrice = 0;
  newState.error = false;
  return newState;
};

const reducer = (state = intialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, newState, action);

    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, newState, action);

    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);

    case actionTypes.FETCH_INGREDIENTS_FAILD:
      newState.error = true;
      return newState;

    default:
      return newState;
  }
};

export default reducer;
