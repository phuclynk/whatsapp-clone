import React from 'react';
import { Provider } from 'react-redux';

import { Counter } from './components';
import { store } from './state-management/store';

const App = () => {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
};

export default App;