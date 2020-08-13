import { combineReducers } from "redux";
import core from "./core";
import cars from './cars';

export default combineReducers({ core, cars });
