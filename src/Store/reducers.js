import { SET_PLAYER_DATA } from './constants';

const playerReducer = (data = [], action) => {
    switch (action.type) {
        case SET_PLAYER_DATA:
            console.log(`reducers.js`, data)
            return [...action.data]
        default:
            return data
    }
}

export default playerReducer;