import * as actionTypes from "./actionsTypes";
import axios from "plugins/axiosOrders";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients,
  };
};

export const fetchIngredientsFaild = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILD,
  };
};

export const initIngredients = () => {
  return async (dispatch) => {
    try {
      const ingredientsRes = await axios.get("/ingredients.json");
      dispatch(setIngredients(ingredientsRes.data));
    } catch (error) {
      dispatch(fetchIngredientsFaild());
    }
  };
};
