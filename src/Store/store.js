import { createStore } from "redux";

const initialState = {
  count: 10,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default createStore(rootReducer);
