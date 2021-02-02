import * as type from '../actions/actionTypes';

const initialState = {
  count: 0,
}

export default function countReducer(state = initialState, action) {
  switch(action.type) {
    case type.ADD: {
      // ** actions에서 payload에 count라는 key값으로 reducer에 전달했기 때문에 비구조화 할당을 count로 지정한다
      const { count } = action.payload;
      return {
        count: count + 1
      };
    }

    case type.SUBSTRACT: {
      const { count } = action.payload;
      return {
        count: count - 1
      };
    }

    default:
      return state;
  }
}