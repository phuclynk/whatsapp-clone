import React from 'react';
import { useStyle } from './style';
import { Container } from '@material-ui/core';

export type NonSelectChatContent = {
    
}

export const NonSelectChatContent = ({...params} : NonSelectChatContent) => {
    const classes = useStyle();

    return (
        <Container className={classes.nonSelectChatContentContainer}>
            Chat Box Container
        </Container>
    );
};