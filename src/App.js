//import logo from './logo.svg';
import "./App.css";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";

import Exercise from "./Exercise";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/Exercise"> Home </Link>
            </li>

            <li>
              <Link to="/Github"> Github </Link>
            </li>

            <li>
              <Link to="/Exercise1"> Exercise1 </Link>
            </li>

            <li>
              <Link to="/Exercise2"> Exercise2 </Link>
            </li>

            <li>
              <Link to="/Exercise3"> Exercise3 </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/Exercise" component={Exercise} />
          <Route path="/Exercise1" component={Exercise1} />
          <Route path="/Exercise2" component={Exercise2} />
          <Route path="/Exercise3" component={Exercise3} />
          <Route
            path="/Github"
            component={() => {
              window.location.replace(
                "https://github.com/ronishkhadgi3/playground"
              );
              return null;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
