import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { profileAppRouter, UriType } from "exodus/internal-router";
import { rem } from "polished";
import { color } from "styles/const";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${rem(10)};
  padding: ${rem(10)};
  width: ${rem(210)};
`;

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  color: ${color.darker.LuckyPoint};
`;

const Dot = styled.span`
  width: ${rem(7)};
  height: ${rem(7)};
  border-radius: 50px;
  background-color: ${color.SunsetOrange};
  margin-top: ${rem(10)};
`;

type TypeData = {
  label: string;
  uri: UriType;
};

type TypeDatas = {
  datas: TypeData[];
};

export const SubNavigation = ({ datas }: TypeDatas) => {
  const [path, setPath] = useState<UriType>(profileAppRouter.identity("1"));
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
            <Text>{data.label}</Text>
            {path === data.uri && <Dot />}
          </LinkWrapper>
        );
      })}
    </NavigationWrapper>
  );
};
