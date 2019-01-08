// import * as actionTypes from "./constants.js";
import { actionTypes } from "./index.js";
import { fromJS } from "immutable";

const defaultState = fromJS({
    focused: false
});

// export default (state = defaultState, action) => {
//     const newState = JSON.parse(JSON.stringify(state));
//     switch(action.type) {
//         case actionTypes.SEARCH_FOCUS:
//             newState.focused = true;
//             return newState;
//         case actionTypes.SEARCH_BLUR:
//             newState.focused = false;
//             return newState;
//         default:
//             return newState;
//     }
//     return state;
// }

// for immutable
export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            // newState.focused = true;
            // immutable对象的set方法, 会结合之前state的值, 已经设置的值(比如focused)
            // 返回一个全新的对象
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            // newState.focused = false;
            return state.set('focused', false);
        default:
            return state;
    }
    return state;
}