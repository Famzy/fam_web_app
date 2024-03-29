import React from 'react';
import {  
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Main from './Main'
import SignUp from './SignUp'
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/signup" component={SignUp} />
        </Switch>
    </Router>
  );
}

export default App;
