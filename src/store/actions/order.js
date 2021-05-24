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

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error,
  };
};

export const fetchOrderStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = () => {
  return async (dispatch) => {
    let fetchedOrders;
    try {
      const ordersRes = await axios.get("/orders.json");
      const data = ordersRes.data;
      fetchedOrders = [];
      for (const key in data) {
        const newObject = { ...data[key], id: key };
        fetchedOrders.push(newObject);
      }
      dispatch(fetchOrdersSuccess(fetchedOrders));
    } catch (error) {
      dispatch(fetchOrdersFail(error));
    }
  };
};
