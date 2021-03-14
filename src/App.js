import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Dashboard></Dashboard>
        </Route>
        <Route path="/login" exact>
          <Login></Login>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
