import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../App.css'
import Landing from './landing/Landing';
import Contact from './contact/Contact';

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
