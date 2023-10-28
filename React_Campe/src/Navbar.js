import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home.component";
import Login from "./views/Login/Login.component";
import Profile from "./views/Profile/Profile.component";
import Error from "./views/Error/Error.component";

const Routes = () => (
  <main>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route component={Error} />
    </Switch>
  </main>
);

export default Routes;