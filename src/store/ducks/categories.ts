import { AnyAction } from "redux";

interface ICategoriesState {
  allCategories: string[];
  selectedCategory: string;
}

const SET_ALL_CATEGORIES = "categories/SET_ALL_CATEGORIES";
const SET_SELECTED_CATEGORY = "categories/SET_SELECTED_CATEGORY";

const initialState: ICategoriesState = {
  allCategories: [],
  selectedCategory: "",
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_ALL_CATEGORIES:
      return { ...state, allCategories: action.value };

    case SET_SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.value };

    default: {
      return state;
    }
  }
};

export const setAllCategories = (value: string[]) => {
  return {
    type: SET_ALL_CATEGORIES,
    value,
  };
};
export const setSelectedCategory = (value: string) => {
  return {
    type: SET_SELECTED_CATEGORY,
    value,
  };
};

export default reducer;
