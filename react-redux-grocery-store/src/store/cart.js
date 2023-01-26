import produceData from "../mockData/produce.json";

const ADD = "cart/ADD";

export function addToCart() {
  return {
    type: ADD,
    key: item,
  };
}

export default function reducerName(state = {}, action) {
  switch (action.type) {
    case ACTION1:
      const newState = { ...state };
      return newState;
    default:
      return state;
  }
}
