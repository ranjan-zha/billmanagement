import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import ManageCharges from '../Components/ManageCharges';
import Login from '../SysterSecurity/Login';

function Layout() {
    return (
      <div className="">
          <div>
                <Router>
                    <Switch>
                        <Route path="/" exact strict component={Login} />
                        <Route path="/login" exact strict component={Login} />
                        <Route path="/manage-charges" exact strict component={ManageCharges} />
                    </Switch>
                </Router>
            </div>
      </div>
    );
  }
  
  export default Layout;
  