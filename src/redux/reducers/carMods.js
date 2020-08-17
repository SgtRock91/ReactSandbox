const initialState = {
    mods: [{
      name: 'K&N CAI',
      sku: '9999',
      price: '$200.00',
    }, {
      name: 'GReddy Exhaust',
      sku: '5555',
      price: '$800.00',
    }]
};

export default (state = initialState, action) => {
  const actionType = (action || {}).type;

  return state;
};