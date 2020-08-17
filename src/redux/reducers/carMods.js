import { SET_CAR_MOD_NAME, SET_CAR_MOD_PRICE, SET_CAR_MOD_SKU, ADD_CAR_MOD } from '../actionTypes'

const initialState = {
    mods: [{
      name: 'K&N CAI',
      sku: '9999',
      price: '$200.00',
    }, {
      name: 'GReddy Exhaust',
      sku: '5555',
      price: '$800.00',
    }],
    name: '',
    price: '',
    sku: '',
};

export default (state = initialState, action) => {
  const { type, Payload: payload } = (action || {});

  if(type === ADD_CAR_MOD) {
    state.mods = state.mods.concat({ name: state.name, price: state.price, sku: state.sku});
  } else if(type === SET_CAR_MOD_NAME) {
    state.name = payload.name;
  } else if(type === SET_CAR_MOD_PRICE) {
    state.price = payload.price;
  } else if(type === SET_CAR_MOD_SKU) {
    state.sku = payload.sku;
  }
  
  return state;
};