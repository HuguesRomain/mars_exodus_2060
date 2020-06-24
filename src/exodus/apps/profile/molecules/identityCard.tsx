import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { color } from "styles/const";
import { LabeledInfo } from "../atoms/labeledInfo";
import Profile from "../../../../styles/assets/pics/exempleProfile.png";
import Finger from "../../../../styles/assets/pics/fingerprint.png";
import Signature from "../../../../styles/assets/pics/signature.png";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${rem(10)} ${rem(15)};
  box-shadow: 0px 5px 15px rgba(153, 155, 168, 0.15);
  border-radius: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${rem(50)};
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  font-size: 20px;
  background-color: ${color.medium.Manatee};
  color: ${color.light.PureWhite};
`;

const Img = styled.img`
  width: ${rem(120)};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 0px 0px 20px 20px;
  background-color: ${color.light.PureWhite};
  padding: ${rem(30)} ${rem(30)};

  @media (min-width: 768px) {
    padding: ${rem(30)} ${rem(50)};
  }
`;

const Content = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: ${rem(50)};
  grid-template-columns: repeat(2, 1fr);
`;

export const IdentityCard = () => {
  return (
    <CardStyle>
      <Header>
        <h2>Carte d’identité Martienne</h2>
      </Header>
      <Wrapper>
        <Content>
          <Img src={Profile} />
          <Img src={Finger} />
          <LabeledInfo title={"NOM"} value={"Doe"} />
          <LabeledInfo title={"PRÉNOM"} value={"John"} />
          <LabeledInfo title={"DATE DE NAISSANCE"} value={"18/06/1984"} />
          <LabeledInfo title={"SEXE"} value={"Masculin"} />
          <LabeledInfo title={"PROFESSION"} value={"Médecin"} />
          <LabeledInfo title={"LIEU DE NAISSANCE"} value={"New York City"} />
          <LabeledInfo title={"TAILLE"} value={"185CM"} />
          <LabeledInfo title={"POIDS"} value={"78KG"} />
          <LabeledInfo title={"SIGNATURE"} value={<Img src={Signature} />} />
        </Content>
      </Wrapper>
    </CardStyle>
  );
};