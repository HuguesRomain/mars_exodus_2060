import React from "react";
import styled from "styled-components";
import { ProfileHeader } from "../molecules/header";
import { IdentityCard } from "../molecules/identityCard";
import { rem } from "polished";

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
  padding-top: ${rem(20)};
  height: 100vh;
`;
