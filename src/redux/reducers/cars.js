import { SET_CARS } from "../actionTypes";

const initialState = {
    cars: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CARS: {
        return {
            cars: action.payload.cars
        };
      };
    default:
      return state;
  }
}
