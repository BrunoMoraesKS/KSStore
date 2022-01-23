import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setSearchValue } from "../../../store/ducks/categoryProducts";
import * as S from "./styles";

const SearchInput = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(
    (store: RootState) => store.categoryProducts
  );

  return (
    <S.SearchInput
      name="search"
      id="search"
      placeholder="Digite para pesquisar..."
      type="text"
      value={searchValue}
      onChange={(e) => {
        dispatch(setSearchValue(e.target.value));
      }}
    />
  );
};

export default SearchInput;
