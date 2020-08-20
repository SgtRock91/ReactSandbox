import { SET_CARS } from "../actionTypes";
import { Car } from '../../models/car';

interface State {
  cars: Array<Car>;
}

interface Action {
  type: string;
  payload: State;
}

const initialState: State = {
    cars: []
};

export default (state: State = initialState, action: Action) => {
  const actionType = (action || {}).type;

  if(actionType === SET_CARS) {
    return {
      cars: action.payload.cars
    };
  }

  return state;
};