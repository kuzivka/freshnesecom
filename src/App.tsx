import { PATH } from '@common/enums';
import { Footer } from '@components/footer/footer/Footer';
import { Header } from '@components/header/header/Header';
import { ThemeProvider } from '@mui/material/styles';
import ProductList from '@pages/all-products/AllProducts';
import SelectedProduct from '@pages/product/SelectedProduct';
import ShoppingCart from '@pages/shopping-cart/ShoppingCart';
import '@styles/style.scss';
import { theme } from '@styles/theme';
import { HashRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path={PATH.ALL_PRODUCTS} element={<ProductList />} />
          <Route path={PATH.PRODUCT} element={<SelectedProduct />} />
          <Route path={PATH.CART} element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
