import React from "react";
import styled from "styled-components";
import icons from "../../../../assets/icons.svg";

const Content = styled.div`
  padding: 12px 16px;
  max-width: 500px;
  display: flex;
  border-radius: 8px;
  background-color: #f8f8f8;
`;
const Icon = styled.svg`
  fill: #848897;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;
const Description = styled.p`
  color: #848897;
`;

export const AddMedia = () => {
  return (
    <Content>
      <Icon>
        <use xlinkHref={`${icons}#addMedia`} />
      </Icon>
      <Description>Photos/Vidéos</Description>
    </Content>
  );
};
