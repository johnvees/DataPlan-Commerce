import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

export default function Header() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? ' active' : '';
  };

  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <div className="container-logo">
            <a href="/home">
              <img src={logo} alt="Your Logo" height="30" />
            </a>
          </div>

          <button
            className="navbar-toggler mr-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className={`nav-item${getNavLinkClass('/home')}`}>
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className={`nav-item${getNavLinkClass('/packages')}`}>
                <a className="nav-link" href="/packages">
                  Packages
                </a>
              </li>
              <li className={`nav-item${getNavLinkClass('/transactions')}`}>
                <a className="nav-link" href="/transactions">
                  Transactions
                </a>
              </li>
              <li className={`nav-item${getNavLinkClass('/log-in')}`}>
                <a href="/log-in">
                  <button className="btn btn-primary">Log In</button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
