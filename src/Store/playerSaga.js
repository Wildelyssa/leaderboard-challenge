import { takeEvery, put } from 'redux-saga/effects'
import { BASE_URL, SET_PLAYER_DATA, PLAYER_DATA } from './constants.js';

function* getPlayerData(){
    let data = yield fetch(BASE_URL);
    data = yield data.json();
    console.log("action", data);
    yield put({ 
        type: SET_PLAYER_DATA, 
        data
    })
}

function* playerSaga() {
    yield takeEvery(PLAYER_DATA, getPlayerData)    
}
export default playerSaga;