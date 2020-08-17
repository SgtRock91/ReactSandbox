// probably want to decompose once enough actions are in here

import {
  INCREMENT, // Core
  SET_CARS, // Cars
  SET_CAR_MOD_NAME, SET_CAR_MOD_PRICE, SET_CAR_MOD_SKU, ADD_CAR_MOD// CarMods
 } from "./actionTypes";


// Core
export const increment = () => ({
  type: INCREMENT,
});

// Cars
export const setCars = cars => ({
  type: SET_CARS,
  payload: {
    cars
  }
});

// Car Mods
export const setCarModName = name => ({
  type: SET_CAR_MOD_NAME,
  Payload: {
    name
  }
});

export const setCarModPrice = price => ({
  type: SET_CAR_MOD_PRICE,
  Payload: {
    price
  }
});

export const setCarModSKU = sku => ({
  type: SET_CAR_MOD_SKU,
  Payload: {
    sku
  }
});

export const addCarMod = () => ({
  type: ADD_CAR_MOD,
});