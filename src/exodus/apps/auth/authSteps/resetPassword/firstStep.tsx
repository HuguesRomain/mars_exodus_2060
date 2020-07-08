import React, { useState } from "react";

import { Input } from "../../atoms/input";
import { Title, Paragraph, FormStyle } from "../../style";
import { authAppRouter } from "exodus/internal-router";
import { AppContext } from "exodus/context";
import { Button } from "exodus/components/atoms/button";
import { space } from "styles/const";

export const ResetPasswordFirstStep = () => {
  const [email, setEmail] = useState<string | null>();
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
        <Input
          value={email ? email : ""}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder={"Adresse e-mail"}
          type={"email"}
        />
        <a href={authAppRouter.resetPasswordSecondStep()}>
          <Button iconSize={20} iconName={"forwardArrow"}>
            <p style={{ marginRight: space.xs }}>Valider</p>
          </Button>
        </a>
      </FormStyle>
    </>
  );
};
