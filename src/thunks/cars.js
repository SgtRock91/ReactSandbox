import { setCars } from '../redux/actions';

export const getCars = () => {
    return async (dispatch, getState) => {

        try {
            const apiUrl = 'http://localhost:3001/cars';
            const response = await fetch(apiUrl);
                    
            const body = await response.json();

            dispatch(setCars(body.cars));
        } catch (e) {
            console.log('Fetch Error: ', e)
        }
    };
};
