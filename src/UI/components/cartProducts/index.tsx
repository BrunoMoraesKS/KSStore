import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import CartProductCard from "../cartProductCard";

import * as S from "./styles";

const CartProducts = ({}) => {
  const { cart } = useSelector((store: RootState) => store.cart);

  return (
    <S.Container>
      {cart.map((product) => {
        return <CartProductCard product={product} />;
      })}
    </S.Container>
  );
};

export default CartProducts;
