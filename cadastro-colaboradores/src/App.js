import Register from "./Pages/Register";
import Login from './Pages/Login';
import Home from './Pages/Home';
import Employes from './Pages/Employes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/login" component={Login} />
          {/* <Route path="/register" component={Register} /> */}
          {/* <Route path="/employes" component={Employes} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
      {/* <Register /> */}
      {/* <Employes /> */}
    </div>
  );
}

export default App;
