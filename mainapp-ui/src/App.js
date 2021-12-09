import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from "./components/Users/Users";
import Navbar from "./components/Navbar/Navbar";
import Groups from "./components/Groups/Groups";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {


    return (
        <div className="App">
            <Router >
                <Navbar/>
                <Switch>
                    <Route path="/users/" exact component={Users} />
                    <Route path="/groups/" exact component={Groups} />
                </Switch>

            </Router>
        </div>
    );
}

export default App;
