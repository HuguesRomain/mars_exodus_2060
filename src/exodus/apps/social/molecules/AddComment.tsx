import React from "react";
import styled from "styled-components";
import { Avatar } from "../atoms/Avatar";
import { iconSize, color } from "styles/const";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";

const Content = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${rem(20)};
  width: 100%;
`;

const InputCommentStyled = styled.div`
  display: flex;
  margin-left: ${rem(15)};
  width: 100%;
`;

const InputStyled = styled.input`
  border-radius: 22px 0px 0px 22px;
  border: none;
  background-color: ${color.light.WhiteSmoke};
  padding: ${rem(10)};
  font-size: 14px;
  width: 100%;
`;

const Send = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 22px 22px 0px;
  border: none;
  background-color: ${color.light.WhiteSmoke};
  padding: ${rem(10)};
`;

const InputComment = () => {
  return (
    <InputCommentStyled>
      <InputStyled placeholder={"Votre commentaire..."} />
      <Send>
        <Icon color={color.SunsetOrange} name={"send"} size={iconSize.s} />
      </Send>
    </InputCommentStyled>
  );
};

export const AddComment = () => {
  return (
    <Content>
      <Avatar
        src={
          "https://www.writeups.org/wp-content/uploads/Punisher-netflix-daredevil-Bernthal.jpg"
        }
        size={iconSize.l}
      />
      <InputComment />
    </Content>
  );
};
