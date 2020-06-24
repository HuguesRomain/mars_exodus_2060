import React from "react";
import styled from "styled-components";
import { color, space } from "styles/const";

import { rem } from "polished";

const ProfileHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${space.l};
`;

const Title = styled.h1`
  font-size: 42px;
  margin: 0;
  margin-bottom: ${rem(10)};
  color: ${color.darker.LuckyPoint};
`;

const Text = styled.p`
  color: ${color.medium.Manatee};
`;

export const ProfileHeader = () => {
  return (
    <ProfileHeaderStyled>
      <Title>Bonjour John !</Title>
      <Text>Prêt pour le départ ?</Text>
    </ProfileHeaderStyled>
  );
};
