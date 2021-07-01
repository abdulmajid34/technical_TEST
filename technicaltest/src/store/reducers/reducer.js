


const initalState = {
    quotes: {},
}

export function reducer(state = initalState, action) {
    switch (action.type) {
        case 'getQuotes/setGetQuotes':
            return { ...state, quotes: action.payload }    
        default:
            return state
    }
}