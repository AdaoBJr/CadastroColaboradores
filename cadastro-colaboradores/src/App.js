import React from 'react';
import Register from "./Pages/Register";
import Login from './Pages/Login';
import Home from './Pages/Home';
import Employes from './Pages/Employes';
import NotFound from './Pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <div>
      <Provider store={ store }>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/employes" component={Employes} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
