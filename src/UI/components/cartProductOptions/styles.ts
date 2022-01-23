import styled from "styled-components";
import { Colors } from "../../../global/globalStyle";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 200px;
`;
export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 16px;

  width: 200px;
`;
export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 200px;
`;
export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 4px;
  padding: 0 4px;
  border: 1px solid ${Colors.stroke}20;

  background-color: ${Colors.tertiary};

  font-size: 2rem;

  cursor: pointer;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  gap: 8px;

  padding: 8px;

  border: 1px solid ${Colors.stroke}20;

  background-color: ${Colors.secondary};

  cursor: pointer;
`;

export const Quantity = styled.h3``;

export const TrashIcon = styled.img`
  width: 24px;
`;
