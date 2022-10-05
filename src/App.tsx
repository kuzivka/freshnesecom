import ProductList from '@pages/all-products/AllProducts';
import Product from '@pages/product/Product';
import ShoppingCart from '@pages/shopping-cart/ShoppingCart';
import { Header } from '@components/header/Header';
import { Footer } from '@components/footer/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { PATH } from '@common/enums';

function App() {
  return (
    <HashRouter>
      <Header />
        <Routes>
          <Route path={PATH.ALL_PRODUCTS} element={<ProductList />} />
          <Route path={PATH.PRODUCT} element={<Product />} />
          <Route path={PATH.CART} element={<ShoppingCart />} />
        </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
