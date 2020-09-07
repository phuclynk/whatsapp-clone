import React from 'react';

import { useStyle } from './style';
import { LeftBar, ChatContent } from './components';

export type ChatBox = {

}

export const ChatBox = ({...params} : ChatBox) => {
    const classes = useStyle();

    return (
        <div className={classes.chatBoxWrapper}>
            <LeftBar/>
            <ChatContent/>
        </div>
    );
};