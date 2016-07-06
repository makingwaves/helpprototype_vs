import assign from 'lodash/assign';

// ------------------------------------
// Constants
// ------------------------------------
const CHANGE_TITLE = 'helpforsikring/pageHeader/CHANGE_TITLE';

const initialState = {
  pageHeaderId: 'Partner1',
  pageHeaderTitle: 'Personlige opplysinger'
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_TITLE:
      return assign({}, state, action.value);
    default:
      return state;
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function changePageHeader(value){
  return {
    type: CHANGE_TITLE,
    value: value
  };
}
