import { combineReducers } from 'redux';
import core from './core';
import cars from './cars';
import carMods from './carMods';

export default combineReducers({ core, cars, carMods });
