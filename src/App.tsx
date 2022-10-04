import AllProductsPage from '@pages/AllProductsPage';
import ProductPage from '@pages/ProductPage';
import ShoppingCart from '@pages/ShoppingCart';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { PATH } from '@common/enums';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={PATH.ALL_PRODUCTS} element={<AllProductsPage />} />
        <Route path={PATH.PRODUCT} element={<ProductPage />} />
        <Route path={PATH.CART} element={<ShoppingCart />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
