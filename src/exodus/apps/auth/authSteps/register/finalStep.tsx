import React from "react";
import styled, { css } from "styled-components";
import { rem } from "polished";

import { Title, Paragraph } from "../../style";
import { Icon } from "styles/atoms/icons";
import { AppContext } from "exodus/context";
import { Button } from "exodus/components/atoms/button";
import { space } from "styles/const";

export const RegisterFinalStep = ({
  setModalStep,
}: {
  setModalStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <>
      <Icon name={"ok"} size={35} style={{ marginBottom: space.l }} />
      <Title isDark={isDark} style={{ marginBottom: space.l, width: rem(250) }}>
        Nouveau mot de passe enregistré
      </Title>
      <Paragraph isDark={isDark}>
        Votre mot de passe a bien été enregistré.
      </Paragraph>
      <BottomContent>
        <Button
          onClick={() => {
            setModalStep(0);
          }}
          iconSize={20}
          styled={CustomButton}
        >
          <p>Valider</p>
        </Button>
      </BottomContent>
    </>
  );
};

const CustomButton = css`
  width: ${rem(200)};
  margin-top: ${space.m};
`;

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
