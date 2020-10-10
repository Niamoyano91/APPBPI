import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home';


function App() {
  return (
    <Router>
    <div className="container">
      <h1>ok</h1>
      <Switch>
        <Route path="/" exact>
         <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
