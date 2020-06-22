import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { profileAppRouter } from "exodus/internal-router";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
`;

const ProfileApp = () => {
  return (
    <>
      <Nav>
        <Link to={profileAppRouter.identity("1")}>Identité</Link>
        <Link to={profileAppRouter.ticket("1")}>Billet</Link>
      </Nav>
      <Router>
        <Switch>
          <Route
            exact
            path={profileAppRouter.identity("1")}
            render={() => <div />}
          />
          <Route
            exact
            path={profileAppRouter.ticket("1")}
            render={() => <div />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default ProfileApp;
