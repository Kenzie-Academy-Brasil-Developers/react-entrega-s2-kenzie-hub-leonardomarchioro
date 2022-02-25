import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import { useState, useEffect } from "react";

const Routes = () => {
  const [authentic, setAuthentic] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Kenziehub:tokenUser"));

    if (token) {
      return setAuthentic(true);
    }
  }, [authentic]);

  return (
    <Switch>
      <Route exact path="/">
        <Login authentic={authentic} setAuthentic={setAuthentic} />
      </Route>
      <Route path="/register">
        <Register authentic={authentic} />
      </Route>
      <Route path="/home">
        <Home authentic={authentic} setAuthentic={setAuthentic} />
      </Route>
    </Switch>
  );
};
export default Routes;
