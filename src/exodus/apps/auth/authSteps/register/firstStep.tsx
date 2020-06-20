import React from "react";

import { Input } from "../../atoms/input";
import { Button } from "../../atoms/button";
import {
  Paragraph,
  Title,
  FormStyle,
  RedirectText,
  Question,
} from "../../style";
import { authAppRouter } from "exodus/internal-router";
import { Link } from "react-router-dom";

export const RegisterFirstStep = () => {
  return (
    <>
      <Title>Bienvenue Voyageur !</Title>
      <Paragraph>
        Veuillez vous enregistrer avec votre mot de passe. S’il s’agit de votre
        première connexion, vous retrouverez ce dernier sur le billet qui vous a
        été envoyé suite à votre achat.
      </Paragraph>
      <FormStyle>
        <Input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder={"Mot de passe"}
        />
        <Link to={authAppRouter.loginSecondStep()}>
          <Button type={"submit"} placeholder={"Valider"} />
        </Link>
      </FormStyle>
      <Link to={authAppRouter.resetPassword()}>
        <RedirectText>Mot de passe oublié</RedirectText>
      </Link>
      <Question>Vous n’avez pas de billet ?</Question>
      <Paragraph>
        Réservez un aller pour votre nouvelle vie sur notre{" "}
        <span style={{ textDecorationLine: "underline" }}>site marchand.</span>
      </Paragraph>
    </>
  );
};
