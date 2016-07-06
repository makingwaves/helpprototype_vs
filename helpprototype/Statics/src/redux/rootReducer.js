import { combineReducers }  from 'redux';
import {reducer as formReducer} from 'redux-form';
import counter from './modules/counter';
import document from './modules/document';
import pageHeader from './modules/pageHeader';

const rootReducer = combineReducers({
  form: formReducer,
  counter,
  document,
  pageHeader
});

export default rootReducer;
