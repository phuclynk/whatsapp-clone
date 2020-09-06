import createSagaMiddleware from 'redux-saga';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { createBrowserHistory  } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { rootSaga } from '../sagas';
import { logger } from '../middleware';
import { createRootReducer } from '../reducer';

export type AppDispatch = typeof store.dispatch;
export const history = createBrowserHistory();

const reducer = createRootReducer(history as any);

function configureAppStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [...getDefaultMiddleware(), sagaMiddleware, routerMiddleware(history)];
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

export type RootState = ReturnType<typeof reducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


