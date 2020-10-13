import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Graphic from './components/Graphic';
import Home from './components/Home';


function App() {
  return (
    <Router>
    <div className="container">
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
