import React from "react";
import { CardAuth } from "./organisms/authCard";
import { FirstStep } from "./molecules/authFirstStep";

const AuthApp = () => {
  return <CardAuth children={<FirstStep />} />;
};

export default AuthApp;
