import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact element={<Logon/>}/>
                <Route path ="/register" element={<Register/>}/>
                <Route path ="/profile" element ={<Profile/>}/>
            </Switch>
        </Router>
    );
}