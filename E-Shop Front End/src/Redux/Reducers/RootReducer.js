import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";
import SubCategoryReducer from "./SubCategoryReducer";
import BrandReducer from "./BrandReducer";
import ProductReducer from "./ProductReducer";
import AuthenticationReducer from "./AuthReducer";
import ReviewsReducer from "./ReviewsReducer";
import WishListReducer from "./WishlistReducer";
import CouponsReducer from "./CouponReducer";
import AddressReducer from "./AddressReducer";
import CartReducer from "./CartReducer";
import ChecoutReducer from "./CheckoutReducer";
import OrdersReducer from "./OrdersReducer";


export default combineReducers({
    allCategory:CategoryReducer,
    allBrand:BrandReducer,
    subcategory:SubCategoryReducer,
    allproducts:ProductReducer,
    AuthReducer:AuthenticationReducer,
    CreateReview:ReviewsReducer,
    WishListReducer:WishListReducer,
    CouponsReducer:CouponsReducer,
    AddressReducer:AddressReducer,
    CartReducer:CartReducer,
    ChecoutReducer:ChecoutReducer,
    OrdersReducer:OrdersReducer,
})