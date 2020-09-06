import React from 'react';
import { Switch, Route } from 'react-router';
import { ThemeProvider } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { Provider, ReactReduxContext } from 'react-redux';

import { theme } from './theme';
import { Counter } from './components';
import { store } from './state-management/store';
import { history } from '@root/state-management/store';

const App = () => {
    return (
        <Provider store={store} context={ReactReduxContext}>
            <ConnectedRouter history={history as any}>
                <ThemeProvider theme={theme}>
                    <>
                        <Switch>
                            <Route exact path="/counter" render={() => (<Counter/>)} />
                        </Switch>
                    </>
                </ThemeProvider>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;