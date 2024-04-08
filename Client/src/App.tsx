import { Route, Routes } from "react-router-dom";
import LayOut from "./components/LayOut";
import Admin from "./components/LayOutAdmin/Admin";
import Cart from "./page/Cart";
import Detail from "./page/Detail";
import HomePage from "./page/HomePage";
import PrivateRoute from "./page/PrivateRoute";
import ShopPage from "./page/ShopPage";
import CategoryList from "./page/admin/categories/CategoryList";
import CategoryUpdate from "./page/admin/categories/CategoryUpdate";
import CreateCategory from "./page/admin/categories/CreateCategory";
import Create from "./page/admin/product/Create";
import ListProducts from "./page/admin/product/ListProducts";
import Update from "./page/admin/product/Update";
import Register from "./page/auth/Register";
import SignIn from "./page/auth/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        >
          <Route path="products" element={<ListProducts />} />
          <Route path="products/add" element={<Create />} />
          <Route path="products/:id" element={<Update />} />
          <Route path="categories" element={<CategoryList />} />
          <Route path="categories/:id" element={<CategoryUpdate />} />
          <Route path="categories/add" element={<CreateCategory />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
