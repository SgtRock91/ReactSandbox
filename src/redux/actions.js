import { INCREMENT, SET_CARS } from "./actionTypes";

export const increment = () => ({
  type: INCREMENT,
  payload: {
    
  }
});

export const setCars = cars => ({
  type: SET_CARS,
  payload: {
    cars
  }
});