import assign from 'lodash/assign';

// ------------------------------------
// Constants
// ------------------------------------
const CHANGE_DOCUMENT = 'helpforsikring/document/CHANGE_DOCUMENT';

const initialState = [
  {
    id: 'partner1',
    name: '',
    defaultText: 'Samboer 1'
  },
  {
    id: 'partner2',
    name: '',
    defaultText: 'Samboer 2'
  }
];

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_DOCUMENT:
      return state.map((partner) => {
        if (partner.id === action.id) {
          return assign({}, partner, {
            name: action.value
          })
        }
        return partner
      });
    default:
      return state;
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function changeDocument(id, value){
  return {
    type: CHANGE_DOCUMENT,
    id: id,
    value: value
  };
}
