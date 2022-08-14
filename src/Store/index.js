import { configureStore } from '@reduxjs/toolkit';

// import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// import reducer from './reducers'
import playerSaga from './playerSaga';
import playerReducer from './reducers';

// import playersReducer from './playersSlice';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: playerReducer,
    middleware:() => [sagaMiddleware]
});

sagaMiddleware.run(playerSaga);

export default store;


