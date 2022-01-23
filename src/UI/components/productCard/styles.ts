import styled, { keyframes } from "styled-components";
import { Colors } from "../../../global/globalStyle";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 250px;
  height: 350px;

  border: 1px solid ${Colors.stroke}20;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;

  padding: 8px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Price = styled.h4`
  font-size: 1.2rem;

  font-weight: 600;

  text-align: center;
`;
export const Currency = styled.span`
  font-size: 1rem;

  font-weight: 500;

  text-align: center;
`;

export const Description = styled.p`
  text-align: center;

  font-size: 1rem;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #bae8e8;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  ::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
export const onMouseOverTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 250px;
  height: 250px;

  padding: 8px;

  background-color: ${Colors.background};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const onMouseOverBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 250px;
  height: 100px;

  padding: 8px;

  background-color: ${Colors.tertiary};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const addToCard = styled.button`
  padding: 4px 8px;

  background-color: ${Colors.button};

  border: none;
  border-radius: 8px;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  font-size: 1rem;

  cursor: pointer;
`;
