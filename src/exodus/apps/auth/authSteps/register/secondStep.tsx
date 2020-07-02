import React, { useState } from "react";

import { Input } from "../../atoms/input";
import { Title, Paragraph, FormStyle } from "../../style";
import { AppContext } from "exodus/context";
import { space, fontSize } from "styles/const";
import { Button } from "exodus/components/atoms/button";
import { NewPasswordDataType, ChangePassword } from "exodus/services/auth/auth";
import styled, { css } from "styled-components";

export const RegisterSecondStep = ({
  setModalStep,
}: {
  setModalStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [resetPassword, setResetPassword] = useState<NewPasswordDataType>({
    newPassword: "",
    oldPassword: "",
  });
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;

  return (
    <>
      <Title isDark={isDark}>Bonjour voyageur !</Title>
      <Paragraph isDark={isDark}>
        Veuillez personnaliser votre mot de passe afin de valider
        l’enregistrement de votre compte.
      </Paragraph>
      <FormStyle>
        <Input
          onChange={(e) => {
            const password = e.target.value;
            setResetPassword((prevState) => ({
              ...prevState,
              oldPassword: password,
            }));
          }}
          value={resetPassword.oldPassword}
          placeholder={"Ancien mot de passe"}
        />
        <Input
          onChange={(e) => {
            const newPassword = e.target.value;
            setResetPassword((prevState) => ({
              ...prevState,
              newPassword: newPassword,
            }));
          }}
          value={resetPassword.newPassword}
          placeholder={"Nouveau mot de passe"}
        />
        <ButtonWrapper>
          <Button
            onClick={() => {
              setModalStep(0);
            }}
            type={"secondary"}
            style={{ marginRight: space.xs }}
            styled={CustomButton}
          >
            <p style={{ marginRight: space.xs, fontSize: fontSize.s }}>
              Annuler
            </p>
          </Button>
          <Button
            onClick={() => {
              setModalStep(2);
              ChangePassword(resetPassword);
            }}
            iconSize={20}
            iconName={"forwardArrow"}
            styled={CustomButton}
          >
            <p style={{ marginRight: space.xs }}>Valider</p>
          </Button>
        </ButtonWrapper>
      </FormStyle>
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CustomButton = css`
  width: 100%;
`;
