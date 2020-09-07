import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import {ChatBox} from './pages';

export type Routers = {

}

export const Routers = ({...params} : Routers) => (
    <>
        <Switch>
            <Route
                exact
                path="/"
                render={() => 
                    <Redirect to="/chat-box" />
                }
            />
            <Route exact path="/chat-box" render={() => (<ChatBox/>)} />
            <Route exact path="/chat-box/:id" render={() => (<ChatBox/>)} />
        </Switch>
    </>
);