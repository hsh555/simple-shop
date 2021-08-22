import { createReducer } from "@reduxjs/toolkit";
import { getProductAction, getProductsListAction, toggleLoadingAction } from "./action";
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
  [toggleLoadingAction.type]: (state, action) => {
    return {
      ...state,
      isLoading: action.payload,
    };
  },
});

export default appReducer;
