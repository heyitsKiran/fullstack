import { ActionTypes } from "../content/action-types";
const initialState = {
  product: [
    {
      id: 1,
      title: "Cristiano Ronaldo",
      category: "GOAT",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return state;
    default:
      return state;
  }
};
