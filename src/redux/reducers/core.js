import { SOME_ACTION } from "../actionTypes";

const initialState = {
    field: 'some value'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SOME_ACTION: {
        //return updated state
      };
    default:
      return state;
  }
}
