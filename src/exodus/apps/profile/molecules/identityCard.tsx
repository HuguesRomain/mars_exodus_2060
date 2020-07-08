import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import { color, fontSize, space, boxShadows, breakPoint } from "styles/const";
import { LabeledInfo } from "../atoms/labeledInfo";
import Finger from "../../../../styles/assets/pics/fingerprint.png";
import { UserStorage } from "exodus/utils/accessStorage";

export const IdentityCard = () => {
  let [UserInfo, setUserInfo] = useState<UserInfoType>();

  useEffect(() => {
    setUserInfo(UserStorage());
  }, []);

  return (
    <CardStyle>
      <Header>
        <h2>MARS ID CARD N°08976589</h2>
      </Header>
      <Wrapper>
        <Content>
          <ProfileImage
            src={`https://symfony-xmt3.frb.io${UserInfo?.profilePicture}`}
          />
          <Img src={Finger} />
          <LabeledInfo title={"NOM"} value={UserInfo?.name} />
          <LabeledInfo title={"PRÉNOM"} value={UserInfo?.firstName} />
          <LabeledInfo
            title={"DATE DE NAISSANCE"}
            value={UserInfo?.birthDate}
          />
          <LabeledInfo title={"SEXE"} value={UserInfo?.gender} />
          <LabeledInfo title={"PROFESSION"} value={UserInfo?.work} />
          <LabeledInfo
            title={"LIEU DE NAISSANCE"}
            value={UserInfo?.birthPlace}
          />
          <LabeledInfo title={"YEUX"} value={UserInfo?.eyeColor} />
          <LabeledInfo title={"CHEVEUX"} value={UserInfo?.hairColor} />
          <LabeledInfo title={"TAILLE"} value={UserInfo?.height} />
          <LabeledInfo title={"POIDS"} value={UserInfo?.weight} />
        </Content>
      </Wrapper>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${space.xs} ${space.s};
  box-shadow: ${boxShadows.light};
  border-radius: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${rem(50)};
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  font-size: ${fontSize.l};
  background-color: ${color.medium.Manatee};
  color: ${color.light.PureWhite};
`;

const Img = styled.img`
  width: ${rem(120)};
`;

const ProfileImage = styled.img`
  border-radius: 10px;
  width: ${rem(127)};
  object-fit: cover;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 0px 0px 20px 20px;
  background-color: ${color.light.PureWhite};
  padding: ${space.m} ${space.m};

  @media (min-width: ${breakPoint.tabletPortrait}) {
    padding: ${space.l} ${space.m};
  }
`;

const Content = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: ${rem(50)};
  grid-row-gap: ${space.m};
  grid-template-columns: repeat(2, 1fr);
`;
