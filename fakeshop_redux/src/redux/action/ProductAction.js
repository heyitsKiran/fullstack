import { ActionTypes } from "../constants/ActionType";

export const SetProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products,
  };
};
export const SelectProduct = (product) => {
  return {
    type: ActionTypes.SELECT_PRODUCT,
    payload: product,
  };
};
