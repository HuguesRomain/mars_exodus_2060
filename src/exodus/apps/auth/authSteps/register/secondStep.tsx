import React, { useState } from "react";

import { Input } from "../../atoms/input";
import { Button } from "../../atoms/button";
import { Title, Paragraph, FormStyle } from "../../style";
import { Link } from "react-router-dom";
import { authAppRouter } from "exodus/internal-router";
import { RightArrow } from "styles/assets/icons/icons";

type NewPassword = {
  password: string;
  confirm: string;
};

export const RegisterSecondStep = () => {
  const [newPassword, setNewPassword] = useState<NewPassword>({
    password: "",
    confirm: "",
  });
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
            const password = e.target.value;
            setNewPassword((prevState) => ({
              ...prevState,
              password: password,
            }));
          }}
          value={newPassword.password}
          placeholder={"Nouveau mot de passe "}
        />
        <Input
          onChange={(e) => {
            const confirm = e.target.value;
            setNewPassword((prevState) => ({
              ...prevState,
              confirm: confirm,
            }));
          }}
          value={newPassword.confirm}
          placeholder={"Confirmer le mot de passe"}
        />
        <Link to={authAppRouter.loginFinalStep()}>
          <Button
            type={"submit"}
            placeholder={"Valider et s’enregistrer"}
            children={<RightArrow />}
          />
        </Link>
      </FormStyle>
    </>
  );
};
