import React from "react";
import { CardAuth } from "./organisms/authCard";
import { RegisterFirstStep } from "./authSteps/register/firstStep";
import { ResetPasswordFirstStep } from "./authSteps/resetPassword/firstStep";
import { ResetPasswordSecondStep } from "./authSteps/resetPassword/secondStep";
import { ResetPasswordFinalStep } from "./authSteps/resetPassword/finalStep";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { authAppRouter } from "exodus/internal-router";
import styled from "styled-components";

const AuthApp = () => {
  return (
    <AuthWrapper>
      <CardAuth
        children={
          <Router>
            <Switch>
              <Route
                exact
                path={authAppRouter.login()}
                render={() => <RegisterFirstStep />}
              />
              <Route
                exact
                path={authAppRouter.resetPassword()}
                render={() => <ResetPasswordFirstStep />}
              />
              <Route
                exact
                path={authAppRouter.resetPasswordSecondStep()}
                render={() => <ResetPasswordSecondStep />}
              />
              <Route
                exact
                path={authAppRouter.resetPasswordFinalStep()}
                render={() => <ResetPasswordFinalStep />}
              />
            </Switch>
          </Router>
        }
      />
    </AuthWrapper>
  );
};

const AuthWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default AuthApp;
