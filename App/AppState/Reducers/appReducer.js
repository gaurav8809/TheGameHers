import InitialState from '../InitialState/appState';
import {SET_APP_USER} from './contants';

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_APP_USER:
      return (state = {
        ...state,
        appUser: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
