import Actions from './actions'

const initial_state = {
    highlight: false
};

function reducer(state = initial_state, action) {
    switch (action.type) {
        case Actions.TOGGLE_HIGHLIGHT:
            return Object.assign({}, state, {
                highlight: !state.highlight
            });
        default:
            return state;
    }
}

export default reducer