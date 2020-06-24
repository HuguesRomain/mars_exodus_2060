import React from "react";
import styled from "styled-components";
import { space } from "styles/const";

import { WelcomeMessage } from "../atoms/welcomeMessage";
import { Button } from "exodus/components/atoms/button";

const ProfileHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space.l} ${space.l};
  width: 100%;
`;

const ButtomWrapper = styled.div``;

export const ProfileHeader = () => {
  return (
    <ProfileHeaderStyled>
      <WelcomeMessage />
      <ButtomWrapper>
        <Button iconName={"disconnect"}>Se déconnecter</Button>
      </ButtomWrapper>
    </ProfileHeaderStyled>
  );
};
