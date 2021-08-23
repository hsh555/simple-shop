import { createReducer } from "@reduxjs/toolkit";
import {
  addProductInCartAction,
  getProductAction,
  getProductsListAction,
  removeProductFromCartAction,
  toggleLoadingAction,
} from "./action";
import initState from "./state";

const appReducer = createReducer(initState, {
  [getProductsListAction.type]: (state, action) => {
    return {
      ...state,
      productsList: [...action.payload],
    };
  },
  [getProductAction.type]: (state, action) => {
    return {
      ...state,
      productItem: action.payload,
    };
  },
  [addProductInCartAction.type]: (state, action) => {
    return {
      ...state,
      productsInCart: [...state.productsInCart, action.payload],
    };
  },
  [removeProductFromCartAction.type]: (state, action) => {
    return {
      ...state,
      productsInCart: [...action.payload],
    };
  },
  [toggleLoadingAction.type]: (state, action) => {
    return {
      ...state,
      isLoading: action.payload,
    };
  },
});

export default appReducer;
