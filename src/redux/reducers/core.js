import { INCREMENT } from "../actionTypes";

const initialState = {
    count: 0
};

export default (state = initialState, action) => {
  const actionType = action.type;

  if (actionType === INCREMENT) {
    return {
      count: state.count + 1
    };
  }

  return state;
}
