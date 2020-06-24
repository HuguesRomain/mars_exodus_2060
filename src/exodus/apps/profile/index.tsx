import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { profileAppRouter } from "exodus/internal-router";
import styled from "styled-components";
import { ProfileHeader } from "./molecules/header";
import { isMobileOnly } from "react-device-detect";
import { ProfileNavigation } from "./molecules/navigation";
import { IdentityCard } from "./organisms/identityCard";
import { IdentityPage } from "./IndentityPage";
import { Button } from "exodus/components/atoms/button";
import { rem } from "polished";

const Nav = styled.div`
  display: flex;
`;

const ProfileAppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  font-size: 12px;
`;

const ProfileApp = () => {
  return (
    <ProfileAppStyled>
      {!isMobileOnly && <ProfileHeader />}
      <Router>
        <ProfileNavigation />
        <Switch>
          <Route
            exact
            path={profileAppRouter.identity("1")}
            render={() => <IdentityCard />}
          />
          <Route
            exact
            path={profileAppRouter.ticket("1")}
            render={() => <div />}
          />
        </Switch>
      </Router>
      <ButtonWrapper>
        <Button
          style={{ marginRight: rem(10), width: rem(100) }}
          type={"primary"}
        >
          Se déconnecter
        </Button>
        <Button type={"secondary"}>Modifier le mot de passe</Button>
      </ButtonWrapper>
    </ProfileAppStyled>
  );
};

export default ProfileApp;
