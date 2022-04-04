
function colorReducer(state = 0, action) {
    if (action.type === 'ADD') {
        return parseInt(state) + parseInt(action.value);
    }

    return state;
}