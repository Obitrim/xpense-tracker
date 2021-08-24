import React from 'react';
import { Switch, Route } from "react-router-dom";

import "./App.css";
import AppHome from "../AppHome";
import ProtectedViews from "../Protected";

const App = (props) => {
  return (
    <main>
    	<Switch>
	    	<Route path="/" exact component={AppHome} />
	    	<Route path="/app" component={ProtectedViews} />
	    </Switch>
    </main>
  )
}

export default App;