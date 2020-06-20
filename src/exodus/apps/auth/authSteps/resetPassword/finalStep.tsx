import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { Ok } from "styles/assets/icons/icons";
import { Title, Paragraph } from "../../style";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ResetPasswordFinalStep = () => {
  return (
    <Wrapper>
      <Ok style={{ marginTop: rem(60), marginBottom: rem(10) }} />
      <Title style={{ marginBottom: "30px", width: rem(250) }}>
        Nouveau mot de passe enregistré
      </Title>
      <Paragraph>
        Un e-mail vient de vous être envoyé afin de confirmer votre nouveau mot
        de passe.
      </Paragraph>
    </Wrapper>
  );
};
