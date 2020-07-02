import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MobileComments from "./MobileComments";
import { socialAppRouter } from "exodus/internal-router";
import { SocialPage } from "./SocialPage";

const SocialContent = styled.main``;

const SocialApp = () => {
  return (
    <Router>
      <SocialContent>
        <Switch>
          <Route
            exact
            path={socialAppRouter.social()}
            render={() => <SocialPage />}
          />
          <Route
            exact
            path={socialAppRouter.comments()}
            render={() => <MobileComments />}
          />
        </Switch>
      </SocialContent>
    </Router>
  );
};

export default SocialApp;
