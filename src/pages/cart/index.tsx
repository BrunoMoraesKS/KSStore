import React, { useEffect, useState } from "react";
import CartProducts from "../../UI/components/cartProducts";
import * as S from "./styles";

const Cart = () => {
  return (
    <S.Container>
      <CartProducts />
    </S.Container>
  );
};

export default Cart;
