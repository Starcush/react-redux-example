import * as type from './actionTypes';

export const add = (count) => ({
  type: type.ADD,
  payload: {
    count,
  }
});

export const substract = (count) => ({
  type: type.SUBSTRACT,
  payload: {
    count,
  }
})