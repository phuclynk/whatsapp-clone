import React from 'react';
import { useStyle } from './style';

import { PHeader, PAvatar } from '@root/components';

export type LeftBar = {
    
}

export const LeftBar = ({...params} : LeftBar) => {
    const classes = useStyle();

    return (
        <div className={classes.leftBarContainer}>
            <PHeader>
                <PHeader.PHeaderItem>
                    <PAvatar alt='PT' size='medium'>PT</PAvatar>
                </PHeader.PHeaderItem>
            </PHeader>
            <div className={classes.searchBox}>

            </div>
            <div className={classes.listConversation}>

            </div>
        </div>
    );
};