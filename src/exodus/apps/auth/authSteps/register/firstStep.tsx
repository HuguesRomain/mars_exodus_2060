import React, { useState } from "react";

import { Input } from "../../atoms/input";
import { Paragraph, Title, FormStyle, Question } from "../../style";
import { authAppRouter } from "exodus/internal-router";
import { Link } from "react-router-dom";
import { AppContext } from "exodus/context";
import { Button } from "exodus/components/atoms/button";
import { space, color } from "styles/const";
import styled from "styled-components";
import { connect, userConnectionData } from "exodus/services/auth/auth";

export const RegisterFirstStep = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  const [setToken] = Context.setTokenContext;

  const [connectionData, setConnectionData] = useState<userConnectionData>({
    username: "",
    password: "",
  });
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [globalError, setGobalerror] = useState<boolean>(false);

  const handleSubmit = (connectionData: userConnectionData) => {
    if (connectionData.username === "" || connectionData.password === "") {
      if (connectionData.username === "") setUsernameError(true);
      if (connectionData.password === "") setPasswordError(true);
      return;
    }
    connect(connectionData).then((resp) => {
      if (resp.code === 401) {
        setGobalerror(true);
      } else {
        setToken(resp.token);
      }
    });
  };

  return (
    <RegisterFirstStepWrapper>
      <Title isDark={isDark}>Bienvenue Voyageur !</Title>
      <Paragraph isDark={isDark}>
        Veuillez vous enregistrer avec votre mot de passe. S’il s’agit de votre
        première connexion, vous retrouverez ce dernier sur le billet qui vous a
        été envoyé suite à votre achat.
      </Paragraph>
      <FormStyle>
        <InputContent>
          <Input
            value={connectionData.username}
            onChange={(e) => {
              setUsernameError(false);
              const username = e.target.value;
              setConnectionData((prevState) => ({
                ...prevState,
                username: username,
              }));
            }}
            placeholder={"Numéro d’embarquement"}
            type={"text"}
            isError={usernameError}
          />
          {usernameError && (
            <Paragraph
              isDark={isDark}
              style={{ marginTop: space.xs, color: color.Lipstick }}
            >
              Veillez rentré votre numéro d’embarquement
            </Paragraph>
          )}
        </InputContent>
        <InputContent>
          <Input
            value={connectionData.password}
            onChange={(e) => {
              setPasswordError(false);
              const password = e.target.value;
              setConnectionData((prevState) => ({
                ...prevState,
                password: password,
              }));
            }}
            placeholder={"Mot de passe"}
            type={"password"}
            isError={passwordError}
          />
          {passwordError && (
            <Paragraph
              isDark={isDark}
              style={{ marginTop: space.xs, color: color.Lipstick }}
            >
              Veillez rentré votre mot de passe
            </Paragraph>
          )}
        </InputContent>
        {globalError && (
          <Paragraph isDark={isDark} style={{ color: color.Lipstick }}>
            Le mot de passe ou le numéro d’embarquement n'est pas valide
          </Paragraph>
        )}
        <Button
          onClick={() => {
            handleSubmit(connectionData);
          }}
          iconSize={20}
          iconName={"forwardArrow"}
        >
          <p style={{ marginRight: space.xs }}>Valider</p>
        </Button>
      </FormStyle>
      <Link to={authAppRouter.loginSecondStep()}></Link>
      <Question isDark={isDark}>Vous n’avez pas de billet ?</Question>
      <Paragraph isDark={isDark}>
        Réservez un aller pour votre nouvelle vie sur notre{" "}
        <span style={{ textDecorationLine: "underline" }}>site marchand.</span>
      </Paragraph>
    </RegisterFirstStepWrapper>
  );
};

const RegisterFirstStepWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
