initialState = {
    artistArr: [],
    artistInfo: [],
    moviesArr: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'action/name':
            {
                return state
            }
        default:
            return state
    }
}