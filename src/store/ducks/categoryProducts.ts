import { ICategoryProducts } from "./../../interfaces/categoryProducts";
import { AnyAction } from "redux";

interface ICategoryState {
  categoryProducts: ICategoryProducts[];
  searchValue: string;
}

const SET_CATEGORY_PRODUCTS = "categoryProducts/SET_CATEGORY_PRODUCTS";
const SET_SEARCH_VALUE = "categoryProducts/SET_SEARCH_VALUE";

const initialState: ICategoryState = {
  categoryProducts: [],
  searchValue: "",
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_CATEGORY_PRODUCTS:
      return { ...state, categoryProducts: action.value };

    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.value };

    default: {
      return state;
    }
  }
};

export const setCategoryProducts = (value: ICategoryProducts[]) => {
  return {
    type: SET_CATEGORY_PRODUCTS,
    value,
  };
};
export const setSearchValue = (value: string) => {
  return {
    type: SET_SEARCH_VALUE,
    value,
  };
};

export default reducer;
