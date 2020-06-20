import React from "react";

import { Input } from "../../atoms/input";
import { Button } from "../../atoms/button";
import { Title, Paragraph, FormStyle } from "../../style";
import { Link } from "react-router-dom";
import { authAppRouter } from "exodus/internal-router";

export const RegisterSecondStep = () => {
  return (
    <>
      <Title>Bonjour, John</Title>
      <Paragraph>
        Veuillez personnaliser votre mot de passe afin de valider
        l’enregistrement de votre compte.
      </Paragraph>
      <FormStyle>
        <Input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder={"Nouveau mot de passe "}
        />
        <Input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder={"Confirmer le mot de passe"}
        />
        <Link to={authAppRouter.loginFinalStep()}>
          <Button type={"submit"} placeholder={"Valider et s’enregistrer"} />
        </Link>
      </FormStyle>
    </>
  );
};
