import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
   
    // <Switch>

    //   
      
    // </Switch>

    <BrowserRouter>
 <Switch>
 <Route exact path="/" component={Home} />
 </Switch>
</BrowserRouter>

  );
 

}

export default App;