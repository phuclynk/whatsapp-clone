import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';

import { theme } from './theme';
import { Counter } from './components';
import { store } from './state-management/store';

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Counter/>
            </ThemeProvider>
        </Provider>
    );
};

export default App;