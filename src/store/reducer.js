import { combineReducers } from "redux-immutable";
// import headerReducer from "../common/header/store/reducer.js";
import { reducer as headerReducer } from "../common/header/store/index.js";

const reducer = combineReducers({
    header: headerReducer
});

export default reducer;