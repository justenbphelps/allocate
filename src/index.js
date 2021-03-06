import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route} from "react-router-dom";

// Routing Components
import App from './components/App'
import Dashboard from './components/Dashboard'
import Login from './components/Login';


const Routing = (
    <Router>
        <div>
            <Route exact path='/' component={ App } />
            <Route exact path='/dashboard' component={ Dashboard } />
            <Route exact path='/login' component={ Login } />
         </div>
    </Router>    
)




ReactDOM.render(Routing, document.getElementById('root'))

serviceWorker.unregister()