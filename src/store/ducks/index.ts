import { combineReducers } from "redux";
import categories from "./categories";
import loading from "./loading";
import categoryProducts from "./categoryProducts";
import cart from "./cart";

export default combineReducers({
  categories,
  loading,
  categoryProducts,
  cart,
});
