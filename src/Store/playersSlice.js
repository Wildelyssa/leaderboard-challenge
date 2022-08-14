// import { createSlice } from '@reduxjs/toolkit';
// // actions
// import {
//     BASE_URL,
//     ERROR_TEXT,
//     REQUEST_PLAYER_DATA_IDLE,
//     REQUEST_PLAYER_DATA_PENDING, 
//     REQUEST_PLAYER_DATA_SUCCESS, 
//     REQUEST_PLAYER_DATA_FAILED
// } from './constants.js';
// // initial state
// const initialPlayerState = {
//     status: REQUEST_PLAYER_DATA_IDLE,
//     playerData: [],
//     error: '',
// }

// export const requestPlayerData = createAsyncThunk('players/requestPlayerData', async () => {
//    return fetch(BASE_URL)
//     .then(response => response.json())
// })

// export const requestPlayerData = async () => {
//     const data = fetch(BASE_URL)
//     .then(response => response.json())
//     return {
//         // type: ...,
//         playerData: data
//     }
// }

// // create slice
// const playersSlice = createSlice({
//     name: 'players',
//     initialState: initialPlayerState,
//     reducers: {
//         // extra logic may go here
//         loadPlayerData(state, action) {
//             state.status = REQUEST_PLAYER_DATA_SUCCESS;
//             state.playerData = action.payload
//         }
        
//     }
//     extraReducers(builder) {
//         builder
//             .addCase(requestPlayerData.fulfilled, (state, action) => {
//                 state.status = REQUEST_PLAYER_DATA_SUCCESS;
//                 state.playerData = action.payload;
//             })
//             .addCase(requestPlayerData.pending, (state) => {
//                 state.status = REQUEST_PLAYER_DATA_PENDING;
//             })
//             .addCase(requestPlayerData.rejected, (state) => {
//                 state.status = REQUEST_PLAYER_DATA_FAILED;
//                 state.error = ERROR_TEXT;
//             })
//         }
// });

// const { reducer } = playersSlice;
// export const playerActions = playersSlice.actions;

// export default reducer;