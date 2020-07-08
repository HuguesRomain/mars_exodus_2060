import React, { useState } from "react";
import styled from "styled-components";
import { profileAppRouter, UriType } from "exodus/internal-router";
import { rem } from "polished";
import { color, space, transitionTime } from "styles/const";
import { AppContext } from "exodus/context";
import { Link } from "react-router-dom";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${space.xs};
  padding: ${space.xs};
  width: ${rem(210)};
`;

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p<{ isDark: boolean }>`
  color: ${(props) =>
    !props.isDark ? color.darker.LuckyPoint : color.light.PureWhite};
  transition: ${transitionTime};
`;

const Dot = styled.span`
  width: ${rem(7)};
  height: ${rem(7)};
  border-radius: 50px;
  background-color: ${color.SunsetOrange};
  margin-top: ${space.xs};
`;

type TypeData = {
  label: string;
  uri: UriType;
};

type TypeDatas = {
  datas: TypeData[];
};

export const SubNavigation = ({ datas }: TypeDatas) => {
  const [path, setPath] = useState<UriType>(profileAppRouter.identity());
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <NavigationWrapper>
      {datas.map((data: any) => {
        return (
          <LinkWrapper
            onClick={() => {
              setPath(data.uri);
            }}
            to={data.uri}
          >
            <Text isDark={isDark}>{data.label}</Text>
            {path === data.uri && <Dot />}
          </LinkWrapper>
        );
      })}
    </NavigationWrapper>
  );
};
