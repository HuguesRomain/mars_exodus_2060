import React, { useState } from "react";

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
import { RightArrow } from "styles/assets/icons/icons";

export const RegisterFirstStep = () => {
  const [password, setPassword] = useState<string>("");
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
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(e.target.value);
          }}
          placeholder={"Mot de passe"}
        />
        <Link
          to={
            password
              ? authAppRouter.loginSecondStep()
              : window.location.pathname
          }
        >
          <Button
            type={"submit"}
            placeholder={`Valider`}
            children={<RightArrow />}
          />
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
