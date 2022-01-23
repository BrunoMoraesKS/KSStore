import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./styles";

import cart from "../../../assets/images/shoppingCart.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { CategoriesList } from "../../../services/categories";

import { setLoading } from "../../../store/ducks/loading";
import { setAllCategories } from "../../../store/ducks/categories";

const Header = () => {
  const { allCategories } = useSelector((store: RootState) => store.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCategories = async () => {
      const categories = await CategoriesList();

      dispatch(setAllCategories(categories));

      dispatch(setLoading(false));
    };

    loadCategories();
  }, []);

  return (
    <>
      <S.Container>
        <S.HomeButton
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </S.HomeButton>
        <S.ShoppingCartButton
          onClick={() => {
            navigate("/cart");
          }}
        >
          <S.ShoppingCart src={cart} alt="Shopping Cart" />
        </S.ShoppingCartButton>
      </S.Container>

      <S.CategoryButtonsContainer>
        {allCategories.map((category: string, index: number) => {
          const selectedUrl = category.replace(/'/, "").replace(" ", "");

          return (
            <S.CategoryButton
              key={index}
              onClick={() => {
                navigate(selectedUrl);
              }}
            >
              {category}
            </S.CategoryButton>
          );
        })}
      </S.CategoryButtonsContainer>
    </>
  );
};

export default Header;
