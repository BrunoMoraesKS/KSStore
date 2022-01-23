import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICart } from "../../../interfaces/cart";
import { RootState } from "../../../store";
import { addItem } from "../../../store/ducks/cart";
import CartProductOptions from "../cartProductOptions";

import * as S from "./styles";

interface ICartProductCardProps {
  product: ICart;
}

const CartProductCard = ({ product }: ICartProductCardProps) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store: RootState) => store.cart);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <S.Card>
      <S.Column>
        <S.Image src={product.image} alt={product.title} />
      </S.Column>
      <S.Column>
        <S.Title>{product.title}</S.Title>
        <S.Price>
          <S.Currency>$ </S.Currency>
          {(product.price * product.quantity).toFixed(2)}
        </S.Price>

        <CartProductOptions quantity={product.quantity} id={product.id} />
      </S.Column>
    </S.Card>
  );
};

export default CartProductCard;
