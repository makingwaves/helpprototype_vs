// ------------------------------------
// Constants
// ------------------------------------
const INCREMENT_COUNTER = 'helpforsikring/counter/INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'helpforsikring/counter/DECREMENT_COUNTER';

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer(state = 4, action = {}) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function increment(){
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement(){
  return {
    type: DECREMENT_COUNTER
  };
}
