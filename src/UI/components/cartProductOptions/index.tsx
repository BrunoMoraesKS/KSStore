import React from "react";
import { useDispatch } from "react-redux";
import * as S from "./styles";
import trash from "../../../assets/images/trash.svg";
import {
  addQuantity,
  removeItem,
  removeQuantity,
} from "../../../store/ducks/cart";

interface ICartProductOptionsProps {
  quantity: number;
  id: number;
}

const CartProductOptions = ({ quantity, id }: ICartProductOptionsProps) => {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.TopContainer>
        <S.QuantityButton
          onClick={() => {
            dispatch(removeQuantity(id));
          }}
        >
          -
        </S.QuantityButton>
        <S.Quantity>{quantity}</S.Quantity>
        <S.QuantityButton
          onClick={() => {
            dispatch(addQuantity(id));
          }}
        >
          +
        </S.QuantityButton>
      </S.TopContainer>
      <S.BottomContainer>
        <S.DeleteButton
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Delete <S.TrashIcon alt="delete" src={trash} />
        </S.DeleteButton>
      </S.BottomContainer>
    </S.Container>
  );
};

export default CartProductOptions;
