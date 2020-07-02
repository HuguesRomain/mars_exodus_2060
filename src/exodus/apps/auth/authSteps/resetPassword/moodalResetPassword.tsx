import React from "react";

import { CardAuth } from "../../organisms/authCard";
import styled from "styled-components";

export const ModalResetPassword = ({ content }: { content: JSX.Element }) => {
  return (
    <Box>
      <CardAuth children={content} />
    </Box>
  );
};

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2000000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;
