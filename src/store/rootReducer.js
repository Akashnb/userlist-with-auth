import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../pages/Auth/redux/reducer';

const appReducer = combineReducers({
  form: formReducer,
  auth: authReducer
});

export default appReducer;
