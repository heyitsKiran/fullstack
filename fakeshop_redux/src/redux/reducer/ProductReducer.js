import { ActionTypes } from "../constants/ActionType";

const initialState = {
  product: [],
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, "product": payload };
    default:
      return state;
  }
};
