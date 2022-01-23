import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICategoryProducts } from "../../../interfaces/categoryProducts";
import { RootState } from "../../../store";
import ProductCard from "../productCard";

import * as S from "./styles";

const CategoryProducts = ({}) => {
  const { categoryProducts, searchValue } = useSelector(
    (store: RootState) => store.categoryProducts
  );

  return (
    <S.Container>
      {categoryProducts.map((product: ICategoryProducts, index: number) => {
        if (searchValue) {
          return (
            product.title.toLowerCase().includes(searchValue.toLowerCase()) && (
              <ProductCard key={index} product={product} />
            )
          );
        } else {
          return <ProductCard key={index} product={product} />;
        }
      })}
    </S.Container>
  );
};

export default CategoryProducts;
