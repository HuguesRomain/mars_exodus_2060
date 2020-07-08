import React from "react";

import { Input } from "../../atoms/input";
import { Title, Paragraph, FormStyle } from "../../style";
import { authAppRouter } from "exodus/internal-router";
import { AppContext } from "exodus/context";
import { Button } from "exodus/components/atoms/button";
import { space } from "styles/const";

export const ResetPasswordSecondStep = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <>
      <Title isDark={isDark}>Mot de passe oublié</Title>
      <Paragraph isDark={isDark} style={{ marginBottom: "10px" }}>
        Veuillez renseigner votre adresse e-mail afin de réinitialiser votre mot
        de passe.
      </Paragraph>
      <FormStyle>
        <Input value={""} placeholder={"Nouveau mot de passe"} />
        <Input value={""} placeholder={"Confirmer le mot de passe"} />
        <a href={authAppRouter.resetPasswordFinalStep()}>
          <Button iconSize={20} iconName={"forwardArrow"}>
            <p style={{ marginRight: space.xs }}>
              Réinitialiser le mot de passe
            </p>
          </Button>
        </a>
      </FormStyle>
    </>
  );
};
