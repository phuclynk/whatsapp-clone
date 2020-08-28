import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { counterReducer } from '../slice/counter-slice';

export const rootReducer = combineReducers({
    counter: counterReducer
});
export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;