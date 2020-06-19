import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { Input } from "../atoms/input";
import { Button } from "../atoms/button";

const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: #979797;
  text-align: center;
  max-width: ${rem(320)};
`;

const FormStyle = styled.form`
  margin: ${rem(20)};
  display: grid;
  grid-row-gap: 20px;
`;

const RedirectText = styled.a`
  text-decoration-line: underline;
`;

const Question = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #454545;
  margin: ${rem(20)} 0;
`;

export const FirstStep = () => {
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
        <Button
          onClick={(e) => {
            console.log(e);
            e.preventDefault();
          }}
          type={"submit"}
          placeholder={"Valider"}
        />
      </FormStyle>
      <RedirectText>Mot de passe oublié</RedirectText>
      <Question>Vous n’avez pas de billet ?</Question>
      <Paragraph>
        Réservez un aller pour votre nouvelle vie sur notre{" "}
        <RedirectText>site marchand.</RedirectText>
      </Paragraph>
    </>
  );
};
