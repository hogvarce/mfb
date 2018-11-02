import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Grid } from 'react-bootstrap';
import { Provider } from 'react-redux';

import AppRouter from 'routes';

import { store } from 'store';

const App = () => (
    <Provider store={store}>
        <Router>
            <Grid>
                <Link to="/">Home</Link>
                <AppRouter />
            </Grid>
        </Router>
    </Provider>
);

export default App;
