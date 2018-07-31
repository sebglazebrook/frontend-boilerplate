import React, { Component } from 'react';
import styles from './styles.scss';
import { Link, Switch, Route } from "react-router-dom";

class ExampleRouteOne extends Component {
  render() {
    return(
      <p>Example Route One</p>
    );
  }
}

class ExampleRouteTwo extends Component {
  render() {
    return(
      <p>Example Route Two</p>
    );
  }
}

class Header extends Component {

  render() {
    return (
      <div className={styles.header}>
        Header here
        <div>
          <Link to="/">ExampleRouteOne</Link>
          <Link to="/second-route">ExampleRouteTwo</Link>
        </div>
        <Switch>
          <Route path="/" exact component={ ExampleRouteOne } />
          <Route path="/second-route" exact component={ ExampleRouteTwo } />
        </Switch>
      </div>
    );
  }

}

export default Header;
