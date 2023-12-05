import React, { ReactNode } from "react";
import styled from "styled-components";
import { lightGrey } from "../constants";

export const Container = styled.div`
  background-color: #f1f2f3;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const IconContainer = styled.div`
  padding: 3px;
  border: 1px solid ${lightGrey};
  border-radius: 50%;
  position: absolute;
  left: -34px;
  background: white;
  top: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimeContainer = styled.div`
  position: absolute;
  left: -70px;
  top: 10px;
`;

export const iconStyle = { height: "20px", width: "20px" };

type Props = {
  icon: ReactNode;
  children: ReactNode;
  time?: string;
};

export const CardContainer = ({ icon, time, children }: Props) => (
  <Container>
    <TimeContainer>{time}</TimeContainer>
    <IconContainer>{icon}</IconContainer>
    {children}
  </Container>
);
