import React from 'react';
import { Switch } from "react-router-dom";

/* COMPONENTS */
import AppHeader from "../../components/AppHeader";
import Container from "../../components/Container";
import MobileNavbar from "../../components/MobileNavbar";
import ProtectedRoute from "../../components/ProtectedRoute";

/* VIEWS */
import Loans from "./Loan";
import Learn from "./Learn";
import Accounts from "./Accounts";
import Dashboard from "./Dashboard";

const ProtectedViews = (props) => {
  return (
    <>
    	<AppHeader />
    	<Container style={{ paddingBottom: "2em" }}>
            <Switch>
                <ProtectedRoute path="/app" exact component={Dashboard} />
                <ProtectedRoute path="/app/accounts" component={Accounts} />
                <ProtectedRoute path="/app/loans" component={Loans} />
                <ProtectedRoute path="/app/learn" component={Learn} />
            </Switch>   
        </Container>
        <MobileNavbar />
    </>
  )
}

export default ProtectedViews;