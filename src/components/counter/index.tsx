import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';

import { counterActions } from '@root/state-management/slice/counter-slice';
import { useAppDispatch, useTypedSelector } from '@root/state-management/store';

import { useStyle } from './style';

type CounterProps = {

};

export const Counter : FunctionComponent = ({...params} : CounterProps) => {
    const classes = useStyle();
    const dispatch = useAppDispatch();

    const number = useTypedSelector(state => state.counter);
    const { decrement, decrement_async, increment, increment_async } = counterActions;

    return (
        <div className={classes.counter} >
            <header className={classes.counterHeader}>
                <h1>{number}</h1>
                <div className={classes.counterContainer}>
                    <Button variant='contained' color='primary' className={classes.btnSubtract} onClick={() => dispatch(decrement())} >-</Button>
                    <Button variant='contained' color='primary' className={classes.btnAdd} onClick={() => dispatch(increment())} >+</Button>
                    <Button variant='contained' color='primary' className={classes.btnSubtractAsync} onClick={() => dispatch(decrement_async())} >-</Button>
                    <Button variant='contained' color='primary' className={classes.btnAddAsync} onClick={() => dispatch(increment_async())} >+</Button>
                </div>
            </header>
        </div>
    );
};