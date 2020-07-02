import React, { useState } from "react";
import styled from "styled-components";
import { space, fontSize } from "styles/const";

import { WelcomeMessage } from "../atoms/welcomeMessage";
import { Button } from "exodus/components/atoms/button";
import { AppContext } from "exodus/context";
import { ModalResetPassword } from "exodus/apps/auth/authSteps/resetPassword/moodalResetPassword";
import { RegisterSecondStep } from "exodus/apps/auth/authSteps/register/secondStep";
import { RegisterFinalStep } from "exodus/apps/auth/authSteps/register/finalStep";

export const ProfileHeader = () => {
  const [ModalStep, setModalStep] = useState<number>(0);
  const Context = React.useContext(AppContext);
  const [setToken] = Context.setTokenContext;
  return (
    <ProfileHeaderStyled>
      {ModalStep > 0 && (
        <ModalResetPassword
          content={
            ModalStep === 1 ? (
              <RegisterSecondStep setModalStep={setModalStep} />
            ) : (
              <RegisterFinalStep setModalStep={setModalStep} />
            )
          }
        />
      )}
      <WelcomeMessage />
      <ButtonWrapper>
        {/* <Button
          onClick={() => {
            setModalStep(1);
          }}
          type={"secondary"}
          style={{ marginRight: space.xs }}
        >
          <p style={{ marginRight: space.xs, fontSize: fontSize.s }}>
            Changer le mot de passe
          </p>
        </Button> */}
        <Button
          onClick={() => {
            localStorage.removeItem("token");
            setToken(null);
            document.location.reload(true);
          }}
          iconName={"disconnect"}
          iconSize={15}
        >
          <p style={{ marginRight: space.xs, fontSize: fontSize.s }}>
            Se déconnecter
          </p>
        </Button>
      </ButtonWrapper>
    </ProfileHeaderStyled>
  );
};

const ProfileHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space.l} ${space.l};
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;
