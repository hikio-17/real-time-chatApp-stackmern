import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/messenger/login" exact component={Login}></Route>
        <Route path="/messenger/register" exact component={Register}></Route>
      </Switch>
    </Router>
  );
}

export default App;
