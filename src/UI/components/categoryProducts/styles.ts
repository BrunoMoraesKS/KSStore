import styled, { keyframes } from "styled-components";
import { Colors } from "../../../global/globalStyle";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  width: 100%;
  margin: 64px 16px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 8px;

  width: 250px;
  height: 350px;

  border: 1px solid ${Colors.stroke}20;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Price = styled.h4`
  text-align: center;
`;

export const Description = styled.p`
  position: absolute;

  width: 250px;
  height: 350px;

  padding: 8px;

  top: 50px;

  text-align: center;

  background-color: ${Colors.background}99;
  border-radius: 10px;
`;
