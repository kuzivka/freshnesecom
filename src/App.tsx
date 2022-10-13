import ProductList from '@pages/all-products/AllProducts';
import Product from '@pages/product/Product';
import ShoppingCart from '@pages/shopping-cart/ShoppingCart';
import { Header } from '@components/header/Header';
import { Footer } from '@components/footer/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PATH } from '@common/enums';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@styles/style.scss';
import { store } from './store';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    allVariants:{
      color:'#151515'
    }
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: 'Open Sans',
          textDecorationLine: 'none',
          color: '#6A983C',
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path={PATH.ALL_PRODUCTS} element={<ProductList />} />
            <Route path={PATH.PRODUCT} element={<Product />} />
            <Route path={PATH.CART} element={<ShoppingCart />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </HashRouter>
    </Provider>
  );
}

export default App;
