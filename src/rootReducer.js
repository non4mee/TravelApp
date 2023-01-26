import { combineReducers } from 'redux';

import appFlow from './reducers/appFlowReducer';
import profile from './reducers/profileReducer'

const rootReducer = combineReducers({
  appFlow,
  profile
});

export default rootReducer;
