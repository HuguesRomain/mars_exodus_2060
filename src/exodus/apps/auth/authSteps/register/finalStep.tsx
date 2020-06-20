import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { Ok } from "styles/assets/icons/icons";
import { Title, Paragraph, Question, RedirectText } from "../../style";

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${rem(50)};
`;

export const RegisterFinalStep = () => {
  return (
    <>
      <Ok style={{ marginTop: rem(60), marginBottom: rem(10) }} />
      <Title style={{ width: rem(250) }}>Nouveau mot de passe enregistré</Title>
      <Paragraph>
        Un e-mail vient de vous être envoyé afin de confirmer votre nouveau mot
        de passe.
      </Paragraph>
      <BottomContent>
        <Question>Vous n’avez pas reçu d’e-mail ?</Question>
        <RedirectText>Cliquez ici pour un nouvel envoi</RedirectText>
      </BottomContent>
    </>
  );
};
