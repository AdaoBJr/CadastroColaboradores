// import Register from "./Pages/Register";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Employes from "./Pages/Employes";

function App() {
  return (
    <div>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/employes" component={Employes} />
          <Route component={NotFound} />
        </Switch>
      </Router> */}
      {/* <Register /> */}
      <Employes />
    </div>
  );
}

export default App;
