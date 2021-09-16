import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import categoryReducer from "./category.reducer";
import userReducer from "./user.reducer";
import productReducer from "./product.reducer";

const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  // order: orderReducer,
  // page: pageReducer,
});
export default rootReducer;
