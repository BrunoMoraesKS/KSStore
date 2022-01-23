import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICategoryProducts } from "../../../interfaces/categoryProducts";
import { RootState } from "../../../store";
import { addItem } from "../../../store/ducks/cart";

import * as S from "./styles";

interface IProductCardProps {
  product: ICategoryProducts;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const [showDescription, setShowDescription] = useState(false);

  const dispatch = useDispatch();

  const { cart } = useSelector((store: RootState) => store.cart);

  const productToCart = {
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: 1,
    image: product.image,
  };

  return (
    <S.Card
      onMouseEnter={() => {
        setShowDescription(true);
      }}
      onMouseLeave={() => {
        setShowDescription(false);
      }}
    >
      {showDescription && (
        <>
          <S.onMouseOverTopContainer>
            <S.Description>{product.description}</S.Description>
          </S.onMouseOverTopContainer>

          <S.onMouseOverBottomContainer>
            <S.Price>
              <S.Currency>$</S.Currency> {product.price}
            </S.Price>
            <S.addToCard
              onClick={() => {
                dispatch(addItem(productToCart));
              }}
            >
              Add to cart
            </S.addToCard>
          </S.onMouseOverBottomContainer>
        </>
      )}
      {!showDescription && (
        <>
          <S.Image src={product.image} alt={product.title} />
          <S.Title>{product.title}</S.Title>
        </>
      )}
    </S.Card>
  );
};

export default ProductCard;
