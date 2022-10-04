import AllProductsPage from '@pages/AllProductsPage';
import ProductPage from '@pages/ProductPage';
import ShoppingCart from '@pages/ShoppingCart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/freshnesecom" element={<AllProductsPage />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
