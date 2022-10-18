import { PATH } from '@common/enums';
import { Category, Product } from '@common/type';
import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductList from '@pages/all-products/AllProducts';
import SelectedProduct from '@pages/product/SelectedProduct';
import ShoppingCart from '@pages/shopping-cart/ShoppingCart';
import { selectProductListSelector } from '@selectors/getProductListSelector';
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from '@services/ecommerce';
import '@styles/style.scss';
import { createContext } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    allVariants: {
      color: '#151515',
    },
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

export const CategoriesContext = createContext<Category[] | undefined>(
  undefined
);
export const ProductsContext = createContext<Product[] | undefined>(undefined);

function App() {
  const { data: categories } = useGetCategoriesQuery();
  const { data: allProducts } = useGetProductsQuery();

  const filteredProducts = useSelector(selectProductListSelector(allProducts));

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CategoriesContext.Provider value={categories}>
          <ProductsContext.Provider value={filteredProducts}>
            <Header />
            <Routes>
              <Route path={PATH.ALL_PRODUCTS} element={<ProductList />} />
              <Route path={PATH.PRODUCT} element={<SelectedProduct />} />
              <Route path={PATH.CART} element={<ShoppingCart />} />
            </Routes>
            <Footer />
          </ProductsContext.Provider>
        </CategoriesContext.Provider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
