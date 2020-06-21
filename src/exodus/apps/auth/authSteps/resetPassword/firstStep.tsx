import React from "react";

import { Input } from "../../atoms/input";
import { Button } from "../../atoms/button";
import { Title, Paragraph, FormStyle } from "../../style";
import { Link } from "react-router-dom";
import { authAppRouter } from "exodus/internal-router";
import { RightArrow } from "styles/assets/icons/icons";

export const ResetPasswordFirstStep = () => {
  return (
    <>
      <Title>Mot de passe oublié</Title>
      <Paragraph style={{ marginBottom: "10px" }}>
        Veuillez renseigner votre adresse e-mail afin de réinitialiser votre mot
        de passe.
      </Paragraph>
      <FormStyle>
        <Input
          value={""}
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder={"Adresse e-mail"}
        />
        <Link to={authAppRouter.resetPasswordSecondStep()}>
          <Button
            type={"submit"}
            placeholder={"Valider"}
            children={<RightArrow />}
          />
        </Link>
      </FormStyle>
    </>
  );
};
