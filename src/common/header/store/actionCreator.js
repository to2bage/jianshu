// import * as actionTypes from "./constants.js";
import { actionTypes } from "./index.js";
import axios from "axios";
import { fromJS } from "immutable";

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
});

export const getList = () => ( (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
        dispatch(changeList(res.data.data));
    }).catch(err => console.log(err));
});