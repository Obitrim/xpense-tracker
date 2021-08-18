import React from 'react';
import { Switch, Route } from "react-router-dom";

import "./App.css";
import AppHome from "../AppHome";

const App = (props) => {
  return (
    <Switch>
    	<Route path="/" exact component={AppHome} />
    </Switch>
  )
}

export default App;