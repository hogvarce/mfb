import * as React from "react";
import { Switch, Route } from "react-router";

import Home from 'components/Home';
import DetailPage from 'components/DetailPage';
import NoMatch from 'components/NoMatch';

const AppRouter: React.StatelessComponent<{}> = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={DetailPage} />
        <Route component={NoMatch}/>
    </Switch>
);

export default AppRouter;
