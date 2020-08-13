import { SOME_ACTION } from "./actionTypes";

export const addSomething = (something) => ({
  type: SOME_ACTION,
  payload: {
    something
  }
});