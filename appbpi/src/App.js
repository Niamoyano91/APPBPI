import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Graphic from './components/Graphic';
import Home from './components/Home';


function App() {
  return (
    <Router>
    <div className="container">
      <h1>ok</h1>
      <Switch>
        <Route path="/" exact>
         <Home />
         <Graphic />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
