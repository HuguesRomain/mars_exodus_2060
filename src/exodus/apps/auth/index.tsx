import React from "react";
import { CardAuth } from "./organisms/authCard";
import { RegisterFirstStep } from "./authSteps/register/firstStep";
import { RegisterSecondStep } from "./authSteps/register/secondStep";
import { RegisterFinalStep } from "./authSteps/register/finalStep";
import { ResetPasswordFirstStep } from "./authSteps/resetPassword/firstStep";
import { ResetPasswordSecondStep } from "./authSteps/resetPassword/secondStep";
import { ResetPasswordFinalStep } from "./authSteps/resetPassword/finalStep";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { authAppRouter } from "exodus/internal-router";

const AuthApp = () => {
  return (
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
              path={authAppRouter.loginSecondStep()}
              render={() => <RegisterSecondStep />}
            />
            <Route
              exact
              path={authAppRouter.loginFinalStep()}
              render={() => <RegisterFinalStep />}
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
  );
};

export default AuthApp;
