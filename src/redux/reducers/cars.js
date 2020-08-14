import { SET_CARS } from "../actionTypes";

const initialState = {
    cars: []
};

export default (state = initialState, action) => {
  const actionType = (action || {}).type;

  if(actionType === SET_CARS) {
    return {
      cars: action.payload.cars
    };
  }

  return state;
};