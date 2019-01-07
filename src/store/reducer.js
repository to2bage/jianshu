const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case "search_focus":
            newState.focused = true;
            return newState;
        case "search_blur":
            newState.focused = false;
            return newState;
        default:
            return newState;
    }
    return state;
}