import React from "react";
import styled from "styled-components";
import { Avatar } from "../atoms/Avatar";
import { iconSize, color, fontSize, space, transitionTime } from "styles/const";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";
import { AppContext } from "exodus/context";

const Content = styled.div<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  padding-top: ${space.s};
  width: 100%;
  margin-top: ${space.xs};
  border-top: 1px solid
    ${(props) =>
      !props.isDark ? color.light.WhiteSmoke : color.darker.LuckyPoint};
  transition: ${transitionTime};
`;

const InputCommentStyled = styled.div`
  display: flex;
  margin-left: ${space.s};
  width: 100%;
`;

const InputStyled = styled.input<{ isDark: boolean }>`
  border-radius: 22px 0px 0px 22px;
  border: none;
  background-color: ${(props) =>
    !props.isDark ? color.light.WhiteSmoke : color.darker.BlackPearl};
  padding: ${space.xs};
  font-size: ${fontSize.s};
  width: 100%;
  transition: ${transitionTime};
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  ::placeholder {
    color: ${(props) =>
      !props.isDark ? color.medium.Manatee : color.light.PureWhite};
    padding-left: ${space.xs};
  }
  transition: ${transitionTime};
`;

const Send = styled.div<{ isDark: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 22px 22px 0px;
  border: none;
  background-color: ${(props) =>
    !props.isDark ? color.light.WhiteSmoke : color.darker.BlackPearl};
  padding: ${space.xs} ${space.s};
  height: ${rem(40)};
  transition: ${transitionTime};
`;

const InputComment = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <InputCommentStyled>
      <InputStyled isDark={isDark} placeholder={"Votre commentaire..."} />
      <Send isDark={isDark}>
        <Icon color={color.SunsetOrange} name={"send"} size={iconSize.s} />
      </Send>
    </InputCommentStyled>
  );
};

export const AddComment = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <Content isDark={isDark}>
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
