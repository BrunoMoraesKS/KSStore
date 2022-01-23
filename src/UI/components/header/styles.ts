import styled from "styled-components";
import { Colors } from "../../../global/globalStyle";

export const Container = styled.header`
  height: 120px;
  width: 100%;
  padding: 0 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${Colors.secondary};
`;

export const HomeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  font-weight: 600;
  font-size: 2rem;
`;

export const ShoppingCart = styled.img`
  width: 40px;
`;

export const ShoppingCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px;

  background-color: transparent;

  border-radius: 50%;
  border: 1px solid ${Colors.stroke};

  cursor: pointer;
`;

export const CategoryButtonsContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const CategoryButton = styled.button`
  width: 25%;
  padding: 8px;

  background-color: ${Colors.button};
  border: 1px solid ${Colors.tertiary};

  font-weight: 600;
  text-transform: capitalize;

  cursor: pointer;
`;
