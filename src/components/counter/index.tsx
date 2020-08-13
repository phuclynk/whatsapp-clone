import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@root/state-management/reducer';
import { 
    decrease_async, 
    increase_async, 
    decrease, 
    increase 
} from '@root/state-management/actions';

import './style.scss';

type CounterProps = {

};

// eslint-disable-next-line no-empty-pattern
export const Counter : FunctionComponent = ({} : CounterProps) => {
    const dispatch = useDispatch();
    const { number } = useTypedSelector(state => state.counter);

    const increaseNumber = () => {
        dispatch(increase());
    };
    const decreaseNumber = () => {
        dispatch(decrease());
    };
    const increaseNumberAsync = () => {
        dispatch(increase_async());
    };
    const decreaseNumberAsync = () => {
        dispatch(decrease_async());
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