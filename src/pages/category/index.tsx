import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryProductsList } from "../../services/categoryProducts";
import { RootState } from "../../store";
import { setSelectedCategory } from "../../store/ducks/categories";
import { setCategoryProducts } from "../../store/ducks/categoryProducts";
import { setLoading } from "../../store/ducks/loading";
import CategoryProducts from "../../UI/components/categoryProducts";
import SearchInput from "../../UI/components/searchInput";
import * as S from "./styles";

const Category = ({ category }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCategoryProducts = async () => {
      dispatch(setLoading(true));

      dispatch(setSelectedCategory(category));

      const getCategoryProducts = await CategoryProductsList(category);
      dispatch(setCategoryProducts(getCategoryProducts));

      dispatch(setLoading(false));
    };

    loadCategoryProducts();
  }, [category]);

  return (
    <S.Container>
      <SearchInput />

      <CategoryProducts />
    </S.Container>
  );
};

export default Category;
