import React, {useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

function Navbar() {


    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={{pathname: `/users`,}}>Users</Link>
                                {/*<a className="nav-link active" aria-current="page" href="#">Users</a>*/}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={{pathname: `/groups`,}}>Groups</Link>

                                {/*<a className="nav-link" href="#">Groups</a>*/}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;