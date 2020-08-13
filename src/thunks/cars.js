import { setCars } from '../redux/actions';

export const getCars = () => {
    return (dispatch, getState) => {
        const car1 = { vin: 111, make: 'GMC', model: 'Sierra' };
        const car2 = { vin: 222, make: 'GMC', model: 'Canyon' };
        const car3 = { vin: 333, make: 'Acura', model: 'RDX' };

        const cars = [car1, car2, car3];
        dispatch(setCars(cars));
    };
};
