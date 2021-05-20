import * as actionTypes from "./actionsTypes";
import axios from "plugins/axiosOrders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error,
  };
};

export const purchaseBurger = (orderData) => {
  return async (dispatch) => {
    try {
      dispatch(purchaseBurgerStart());
      const purchaseRes = await axios.post("/orders.json", orderData);
      dispatch(purchaseBurgerSuccess(purchaseRes.data.name, orderData));
    } catch (error) {
      console.log(error);
      dispatch(purchaseBurgerFail(error));
    }
  };
};
