import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarLogin from './Components/Utilities/NavBar';
import Footer from "./Components/Utilities/Footer";
import ProtectedRoutes from './Components/Utilities/ProtectedRoutes';
import ProtectedRoutesHook from './Components/CustomHooks/Auth/ProtectedRoutes-Hook';

// Lazy load the components
const HomePage = lazy(() => import('./Pages/Home/HomePage'));
const LoginPage = lazy(() => import('./Pages/Auth/LoginPage'));
const Register = lazy(() => import('./Pages/Auth/Register'));
const AllCategory = lazy(() => import('./Pages/Category/AllCategory'));
const AllBrands = lazy(() => import('./Pages/Brand/AllBrands'));
const AllProductsPage = lazy(() => import('./Pages/Products/AllProductsPage'));
const ProductsDetailsPage = lazy(() => import('./Pages/Products/ProductsDetailsPage'));
const CardPage = lazy(() => import('./Pages/Cart/CardPage'));
const ChoosePayMethodPage = lazy(() => import('./Pages/PaymentPage/ChoosePayMethodPage'));
const AdminAllProductPage = lazy(() => import('./Pages/Admin/AdminAllProductPage'));
const AdminAllOrderPage = lazy(() => import('./Pages/Admin/AdminAllOrderPage'));
const AdminOrderDetailsPage = lazy(() => import('./Pages/Admin/AdminOrderDetailsPage'));
const AdminAddBrandPage = lazy(() => import('./Pages/Admin/AdminAddBrandPage'));
const AdminAddCategoryPage = lazy(() => import('./Pages/Admin/AdminAddCategoryPage'));
const AdminAddSubCatPage = lazy(() => import('./Pages/Admin/AdminAddSubCatPage'));
const AdminAddProductPage = lazy(() => import('./Pages/Admin/AdminAddProductPage'));
const UserAllOrdersPage = lazy(() => import('./Pages/User/UserAllOrdersPage'));
const UserFavouriteProductsPage = lazy(() => import('./Pages/User/UserFavouriteProductsPage'));
const UserAllAdressesPage = lazy(() => import('./Pages/User/UserAllAdressesPage'));
const UserEditAdressPage = lazy(() => import('./Pages/User/UserEditAdressPage'));
const UserAddAdressPage = lazy(() => import('./Pages/User/UserAddAdressPage'));
const UserProfilePage = lazy(() => import('./Pages/User/UserProfilePage'));
const AdminEditProductPage = lazy(() => import('./Pages/Admin/AdminEditProductPage'));
const ForgetPassword = lazy(() => import('./Pages/Auth/ForgetPassword'));
const VerifyPassword = lazy(() => import('./Pages/Auth/VerifyPassword'));
const ResetPassword = lazy(() => import('./Pages/Auth/ResetPassword'));
const AdminAddCouponPage = lazy(() => import('./Pages/Admin/AdminAddCouponPage'));
const AdminEditCouponPage = lazy(() => import('./Pages/Admin/AdminEditCouponPage'));
const ProductsByCategory = lazy(() => import('./Pages/Products/ProductsByCategory'));
const ProductsByBrand = lazy(() => import('./Pages/Products/ProductsByBrand'));

function App() {
  const [isUser, isAdmin] = ProtectedRoutesHook();

  return (
    <div className='font'>
      <NavBarLogin />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/allcategory' element={<AllCategory />} />
            <Route path='/AllBrands' element={<AllBrands />} />
            <Route path='/AllProducts' element={<AllProductsPage />} />
            <Route path='/AllProducts/:id' element={<ProductsDetailsPage />} />
            <Route path='/cart' element={<CardPage />} />
            <Route path='/products/category/:id' element={<ProductsByCategory />} />
            <Route path='/products/brand/:id' element={<ProductsByBrand />} />
            
            <Route element={<ProtectedRoutes auth={isAdmin} />}>
              <Route path='/admin/AllProduct' element={<AdminAllProductPage />} />
              <Route path='/admin/AllOrders' element={<AdminAllOrderPage />} />
              <Route path='/admin/AllOrders/:id' element={<AdminOrderDetailsPage />} />
              <Route path='/admin/AddBrand' element={<AdminAddBrandPage />} />
              <Route path='/admin/Category' element={<AdminAddCategoryPage />} />
              <Route path='/admin/SubCategory' element={<AdminAddSubCatPage />} />
              <Route path='/admin/AddProduct' element={<AdminAddProductPage />} />
              <Route path="/admin/addCoupon" element={<AdminAddCouponPage />} />
              <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage />} />
            </Route>

            <Route element={<ProtectedRoutes auth={isUser} />}>
              <Route path='/User/AllOrders' element={<UserAllOrdersPage />} />
              <Route path='/order/paymethod' element={<ChoosePayMethodPage />} />
              <Route path="/User/FavoriteProducts" element={<UserFavouriteProductsPage />} />
              <Route path="/User/AllAddresses" element={<UserAllAdressesPage />} />
              <Route path="/User/EditAdress/:id" element={<UserEditAdressPage />} />
              <Route path="/User/AddAddress" element={<UserAddAdressPage />} />
              <Route path="/User/Profile" element={<UserProfilePage />} />
              <Route path="/admin/editproduct/:id" element={<AdminEditProductPage />} />
              <Route path="/User/forget-password" element={<ForgetPassword />} />
              <Route path="/User/verify-code" element={<VerifyPassword />} />
              <Route path="/User/reset-password" element={<ResetPassword />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
