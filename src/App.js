//import logo from './logo.svg';
//import './App.css';
import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom"
import Exercise1 from "./Exercise1" 
function App() {
  return (
    <div className="App">
      <Router>

        <li>
          <Link to="/"> Home </Link>
        </li>
        <br></br>

        <li>
          <Link to="/Github"> Github </Link>
        </li>
        <br></br>

        <li>
          <Link to="/Exercise1"> Exercise1 </Link>
        </li>

        <Switch>
          <Route path="/Exercise1" component={Exercise1} />
          <Route path='/Github' component={() => { 
     window.location.replace('https://github.com/ronishkhadgi3/playground'); 
     return null;
}}/>
        </Switch>
        

        
      
        
      </Router>

    </div>
  );
}
export default App;