import AllProductsPage from '@pages/AllProductsPage';
import ProductPage from '@pages/ProductPage';
import ShoppingCart from '@pages/ShoppingCart';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
