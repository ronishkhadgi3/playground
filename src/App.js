//import logo from './logo.svg';
//import './App.css';
import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom"
import Exercise1 from "./Exercise1" 
function App() {
  return (
    <div className="App">
      
      

      
      <Router>
        
      <Link to="/"> Home  </Link>
      <Link to="/Exercise1"> Exercise1  </Link>
      <Switch>

        <Route path = "/Exercise1" component = {Exercise1}/> 
        
      </Switch>
        </Router>  
 
    </div>
  );
}

export default App;