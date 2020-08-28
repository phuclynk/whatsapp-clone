import React, { FunctionComponent } from 'react';

import { useAppDispatch } from '@root/state-management/store';
import { useTypedSelector } from '@root/state-management/reducer';
import { counterActions } from '@root/state-management/slice/counter-slice';

import './style.scss';

type CounterProps = {

};

export const Counter : FunctionComponent = ({...params} : CounterProps) => {
    const dispatch = useAppDispatch();
    const number = useTypedSelector(state => state.counter);

    const increaseNumber = () => {
        dispatch(counterActions.increment());
    };
    const decreaseNumber = () => {
        dispatch(counterActions.decrement());
    };
    const increaseNumberAsync = () => {
        dispatch(counterActions.increment_async());
    };
    const decreaseNumberAsync = () => {
        dispatch(counterActions.decrement_async());
    };

    return (
        <div className="App" >
            <header className="App-header">
                <h1>{number}</h1>
                <div className='counter-container'>
                    <button onClick={decreaseNumber} type="button" className='button button__subtract'>-</button>
                    <button onClick={increaseNumber} type="button" className='button button__add'>+</button>
                    <button onClick={decreaseNumberAsync} type="button" className='button button__subtract'>(-)</button>
                    <button onClick={increaseNumberAsync} type="button" className='button button__add'>(+)</button>
                </div>
            </header>
        </div>
    );
};