import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { rootSaga } from '../sagas';
import { logger } from '../middleware';
import { rootReducer as reducer } from '../reducer';
import { useDispatch } from 'react-redux';

type AppDispatch = typeof store.dispatch;

function configureAppStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [...getDefaultMiddleware(), sagaMiddleware];
    const devMode = process.env.NODE_ENV === 'development';

    if (devMode) {
        middleware.push(logger);
    }

    const store = configureStore({
        reducer,
        middleware,
        preloadedState: initialState,
        devTools: process.env.NODE_ENV !== 'production',
    });

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('../reducer', () => store.replaceReducer(reducer));
    }

    sagaMiddleware.run(rootSaga);
    return store;
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const store = configureAppStore();


