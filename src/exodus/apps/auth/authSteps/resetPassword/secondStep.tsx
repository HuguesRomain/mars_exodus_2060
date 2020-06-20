import React from "react";

import { Input } from "../../atoms/input";
import { Button } from "../../atoms/button";
import { Title, Paragraph, FormStyle } from "../../style";
import { Link } from "react-router-dom";
import { authAppRouter } from "exodus/internal-router";

export const ResetPasswordSecondStep = () => {
  return (
    <>
      <Title>Mot de passe oublié</Title>
      <Paragraph style={{ marginBottom: "10px" }}>
        Veuillez renseigner votre adresse e-mail afin de réinitialiser votre mot
        de passe.
      </Paragraph>
      <FormStyle>
        <Input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder={"Nouveau mot de passe"}
        />
        <Input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder={"Confirmer le mot de passe"}
        />
        <Link to={authAppRouter.resetPasswordFinalStep()}>
          <Button
            type={"submit"}
            placeholder={"Réinitialiser le mot de passe"}
          />
        </Link>
      </FormStyle>
    </>
  );
};
