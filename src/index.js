import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';

import './index.css';
import App from './App';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Transfer from './components/transfer';
import Error from './components/error';
import * as serviceWorker from './serviceWorker';


//routing
const routing = (
    <Router>
        <div>
            {/*<ul>*/}
                {/*<li>*/}
                    {/*<NavLink exact activeClassName="active" to="/">*/}
                        {/*Home*/}
                    {/*</NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                    {/*<NavLink activeClassName="active" to="/login">*/}
                        {/*Login*/}
                    {/*</NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                    {/*<NavLink activeClassName="active" to="/dashboard">*/}
                        {/*Dashboard*/}
                    {/*</NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                    {/*<NavLink activeClassName="active" to="/transfer">*/}
                        {/*Transfer*/}
                    {/*</NavLink>*/}
                {/*</li>*/}
            {/*</ul>*/}
            {/*<hr />*/}

            <Switch>
                <Route path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/transfer" component={Transfer} />
                <Route path="/error" component={Error} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
