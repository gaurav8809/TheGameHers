import appReducer from './appReducer';
import {combineReducers} from 'redux';
import {RESET_STORE} from "./contants";
import {appDefaultReducer} from "../InitialState";

export const initialReducer = combineReducers({
    appReducer
});

export default function rootReducer(state, action) {
    const finalReducer = initialReducer(state, action);
    let finalState = finalReducer;
    if (action.type === RESET_STORE) {
        finalState = appDefaultReducer;
        finalState.appState.appUser = finalReducer.appState.appUser;
    }

    return finalState;
}

