import { makeStyles, Theme } from '@material-ui/core';

export const useStyle = makeStyles((theme: Theme) => {
    return {
        root: {},
        colorDefault: {},
        circle: {},
        rounded: {},
        square: {},
        img: {},
        fallback: {},
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3)
        },
        medium: {
            width: theme.spacing(5),
            height: theme.spacing(5)
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7)
        }
    };
});