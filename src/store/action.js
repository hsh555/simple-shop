import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import ACTION_TYPES from "./action-types";

const toggleLoadingAction = createAction(ACTION_TYPES.TOGGLE_LOADING);
const getProductAction = createAction(ACTION_TYPES.GET_PRODUCT);
const getProductsListAction = createAction(ACTION_TYPES.GET_PRODUCTS_LIST);
const addProductInCartAction = createAction(ACTION_TYPES.ADD_PRODUCT_IN_CART);
const removeProductFromCartAction = createAction(ACTION_TYPES.REMOVE_PRODUCT_FROM_CART);


const getProductsFromApiAction = createAsyncThunk(
  "getproducts/fetch",
  async (url, thunkOptions) => {
    const { dispatch } = thunkOptions;
    dispatch(toggleLoadingAction(true));
    try {
      const res = await fetch(url);
      const jsonRes = await res.json();
      dispatch(getProductsListAction(jsonRes));
    } catch (error) {
      console.log("some error");
    } finally {
      dispatch(toggleLoadingAction(false));
    }
  }
);

const getProductFromApiAction = createAsyncThunk(
  "getproduct/fetch",
  async (url, thunkOptions) => {
    const { dispatch } = thunkOptions;
    dispatch(toggleLoadingAction(true));
    try {
      const res = await fetch(url);
      const jsonRes = await res.json();
      dispatch(getProductAction(jsonRes));
    } catch (error) {
      console.log("some error");
    } finally {
      dispatch(toggleLoadingAction(false));
    }
  }
);

export {
  getProductsListAction,
  toggleLoadingAction,
  getProductsFromApiAction,
  getProductFromApiAction,
  getProductAction,
  addProductInCartAction,
  removeProductFromCartAction
};
