import carsReducer from './cars'; 
import { SET_CARS } from "../actionTypes";


const initialState = {
    cars: []
};

describe('Cars Reducer should', () => {
    test('return initial state if no state and no action given', () => {
        const state = carsReducer();

        expect(state).toStrictEqual(initialState);
    })
    test('return state as is if non-matching action', () => {
        const testState = {test: 'state'};
        const state = carsReducer(testState, {type: 'DNE'});

        expect(state).toStrictEqual(testState);
    })
    test('return updates state with SET_CARS action', () => {
        const cars = [{ vin: 111, make: 'chevy', make: 'silverado' }];
        const state = carsReducer(initialState, {type: SET_CARS, payload: { cars }});
        const expectedState = { cars };

        expect(state).toStrictEqual(expectedState);
    })
})
