import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route {...props} render={
    	props => {
    		if (true) {
    			return <Component {...props} />
    		} else {
    			// save url being routed to
    			return <Redirect to={{
    				pathname: "/auth/login",
    				state: props.location
    			}}/>
    		}
    	}}
    />
  )
}

export default ProtectedRoute;