import React from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import PostDetails from './Components/PostDetails/PostDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const bodyStyle= {
  textAlign: 'center'
}

function App() {
  return (
    <Router>
      <div style={bodyStyle}>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/post/:id">Post Details</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            
            <Route path="/post/:id">
                <PostDetails></PostDetails>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
