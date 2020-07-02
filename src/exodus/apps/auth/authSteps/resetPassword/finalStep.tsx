import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { Ok } from "styles/assets/icons/icons";
import { Title, Paragraph } from "../../style";
import { AppContext } from "exodus/context";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ResetPasswordFinalStep = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <Wrapper>
      <Ok style={{ marginTop: rem(60), marginBottom: rem(10) }} />
      <Title isDark={isDark} style={{ marginBottom: "30px", width: rem(250) }}>
        Nouveau mot de passe enregistré
      </Title>
      <Paragraph isDark={isDark}>
        Un e-mail vient de vous être envoyé afin de confirmer votre nouveau mot
        de passe.
      </Paragraph>
    </Wrapper>
  );
};
