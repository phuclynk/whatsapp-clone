import { put, takeEvery, all, delay } from 'redux-saga/effects';
import { counterSlice } from '../slice';

function* incrementAsync() {
    yield delay(500);
    yield put({ type: counterSlice.actions.increment().type });
}

function* decrementAsync() {
    yield delay(500);
    yield put({ type: counterSlice.actions.decrement().type });
}

function* watchIncrementAsync() {
    yield takeEvery(counterSlice.actions.increment_async().type, incrementAsync);
}

function* watchDecrementAsync() {
    yield takeEvery(counterSlice.actions.decrement_async().type, decrementAsync);
}

export function* counterSaga() {
    yield all([
        watchIncrementAsync(),
        watchDecrementAsync()
    ]);
} 