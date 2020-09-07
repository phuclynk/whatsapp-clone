import { createMuiTheme } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: grey[500],
        },
    },
    spacing: 8,
});