import React from "react";
import styled from "styled-components";
import { ProfileHeader } from "../molecules/header";
import { IdentityCard } from "../molecules/identityCard";

export const InfoSection = () => {
  return (
    <SectionWrapper>
      <ProfileHeader />
      <IdentityCard />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
`;
