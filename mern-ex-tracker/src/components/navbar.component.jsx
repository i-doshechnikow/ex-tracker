import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Tracker
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link className="nav-link" to="/">
                Exercise
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/create">
                Create exercise
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/user">
                Create user
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
