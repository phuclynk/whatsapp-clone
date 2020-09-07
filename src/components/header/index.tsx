import React, { ReactNode } from 'react';
import { useStyle } from './style';

export type PHeader = {
    title?: ReactNode | undefined
    icon?: ReactNode | undefined
} & React.PropsWithChildren<{}>;

export type PHeaderTitle = {
    title: ReactNode | undefined
} 

export type PHeaderItem = {
    children: ReactNode | undefined,
    right?: boolean
}

export const PHeader = ({ title, children } : PHeader) => {
    const classes = useStyle();

    return (
        <div className={classes.pHeader}>
            {
                title ? (
                    <PHeader.PHeaderItem>
                        <PHeader.PHeaderTitle title={title}/>
                    </PHeader.PHeaderItem>
                ) : (
                    children
                )
            }
        </div>
    );
};

PHeader.PHeaderTitle = ({ title } : PHeaderTitle) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyle();

    return (
        <div className={classes.pHeaderTitle}>
            {title}
        </div>
    );
};

PHeader.PHeaderItem = ({ children, right } : PHeaderItem) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyle();

    return (
        <div className={`${classes.pHeaderItem}  ${right && classes.pHeaderItemRightAlign}`}>
            {children}
        </div>
    );
};