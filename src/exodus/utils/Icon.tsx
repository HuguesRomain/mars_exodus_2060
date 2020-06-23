import React from "react";
import icons from "../../assets/icons.svg";

type Props = {
  name: string;
};

export const Icon = ({ name }: Props) => {
  return (
    <svg>
      <use xlinkHref={`${icons}#logo`} />
    </svg>
  );
};
