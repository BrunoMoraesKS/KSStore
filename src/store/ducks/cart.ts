import { AnyAction } from "redux";

interface ICart {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface ICartState {
  cart: ICart[];
}

const ADD_ITEM = "cart/ADD_ITEM";

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

export default reducer;
