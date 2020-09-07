import { makeStyles, Theme } from '@material-ui/core';

export const useStyle = makeStyles((theme: Theme) => ({
    chatBoxWrapper: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row'
    }
}));