import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  orders: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_START:
      newState.loading = true;
      break;
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      newState.loading = false;
      newState.orders = state.orders.concat(action.order);
      break;
    case actionTypes.PURCHASE_BURGER_FAIL:
      newState.loading = false;
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
