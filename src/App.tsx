import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { Provider, ReactReduxContext } from 'react-redux';

import { theme } from './theme';
import { store } from './state-management/store';
import { history } from '@root/state-management/store';
import { Routers } from './router';

const App = () => {
    return (
        <Provider store={store} context={ReactReduxContext}>
            <ConnectedRouter history={history as any}>
                <ThemeProvider theme={theme}>
                    <Routers/>
                </ThemeProvider>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;