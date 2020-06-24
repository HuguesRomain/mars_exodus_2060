import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { profileAppRouter } from "exodus/internal-router";
import styled from "styled-components";
import { ProfileHeader } from "./molecules/header";
import { isMobileOnly } from "react-device-detect";
import { ProfileNavigation } from "./molecules/navigation";

const Nav = styled.div`
  display: flex;
`;

const ProfileApp = () => {
  return (
    <>
      {!isMobileOnly && <ProfileHeader />}
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
        <ProfileNavigation />
      </Router>
    </>
  );
};

export default ProfileApp;
