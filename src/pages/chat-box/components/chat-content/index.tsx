import React from 'react';
import { useStyle } from './style';

export type ChatContent = {
    
}

export const ChatContent = ({...params} : ChatContent) => {
    const classes = useStyle();

    return (
        <div className={classes.chatContentContainer}>
            Chat Content
        </div>
    );
};