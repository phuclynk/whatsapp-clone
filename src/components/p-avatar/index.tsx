import React, { ReactNode } from 'react';
import Avatar, { AvatarProps } from '@material-ui/core/Avatar';

import { useStyle } from './style';

export type PAvatar = {
    size: 'small' | 'medium' | 'large' | undefined,
    children: ReactNode,
} & AvatarProps

export const PAvatar = ({ size, ...props }: PAvatar) => {
    const { 
        root, colorDefault, circle, rounded, square, img, fallback,
        small, medium, large
    } = useStyle({ size } as PAvatar);

    let sizeStyle = medium;

    switch (size) {
    case 'small':
        sizeStyle = small;
        break;
    case 'large':
        sizeStyle = large;
        break;
    default:
        sizeStyle = medium;
        break;
    }
    
    return(
        <Avatar 
            className={sizeStyle}
            classes={{ root, colorDefault, circle, rounded, square, img, fallback }}
            {...props}
        />
    );
};
PAvatar.muiName = 'Avatar';