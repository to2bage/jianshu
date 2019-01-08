// import * as actionTypes from "./constants.js";
import { actionTypes } from "./index.js";

const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            newState.focused = true;
            return newState;
        case actionTypes.SEARCH_BLUR:
            newState.focused = false;
            return newState;
        default:
            return newState;
    }
    return state;
}