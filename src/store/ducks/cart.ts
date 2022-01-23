import { AnyAction } from "redux";
import { ICart } from "../../interfaces/cart";

interface ICartState {
  cart: ICart[];
}

const ADD_ITEM = "cart/ADD_ITEM";
const REMOVE_ITEM = "cart/REMOVE_ITEM";
const ADD_QUANTITY = "cart/ADD_QUANTITY";
const REMOVE_QUANTITY = "cart/REMOVE_QUANTITY";

const initialState: ICartState = {
  cart: [],
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_ITEM: {
      const alreadyOnCart = state.cart.find((item) => {
        return item.id === action.value.id;
      });

      if (alreadyOnCart) {
        return {
          ...state,
          cart: state.cart.map((item, i) =>
            item.id === action.value.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, action.value] };
      }
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.value),
      };
    }

    case ADD_QUANTITY: {
      return {
        ...state,
        cart: state.cart.map((item, i) =>
          item.id === action.value
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case REMOVE_QUANTITY: {
      return {
        ...state,
        cart: state.cart.map((item, i) =>
          item.id === action.value
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }

    default: {
      return state;
    }
  }
};

export const addItem = (value: ICart) => {
  return {
    type: ADD_ITEM,
    value,
  };
};
export const removeItem = (value: number) => {
  return {
    type: REMOVE_ITEM,
    value,
  };
};
export const addQuantity = (value: number) => {
  return {
    type: ADD_QUANTITY,
    value,
  };
};
export const removeQuantity = (value: number) => {
  return {
    type: REMOVE_QUANTITY,
    value,
  };
};

export default reducer;
