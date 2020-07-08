import React from "react";
import { Icon } from "styles/atoms/icons";
import { homeAppRouter } from "exodus/internal-router";

export const IconMarsExodus = () => {
  return (
    <a href={homeAppRouter.home()}>
      <Icon name={"logo"} />
    </a>
  );
};
