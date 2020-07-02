import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MobileComments from "./MobileComments";
import { socialAppRouter } from "exodus/internal-router";
import { SocialPage } from "./SocialPage";
import { useGetPosts } from "exodus/services/social/social.hook";

const SocialContent = styled.main``;

const SocialApp = () => {
  const InitialPost: any = useGetPosts();
  const allPosts = InitialPost["hydra:member"];
  return (
    <Router>
      <SocialContent>
        <Switch>
          <Route
            exact
            path={socialAppRouter.social()}
            render={() => <SocialPage allPosts={allPosts} />}
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
