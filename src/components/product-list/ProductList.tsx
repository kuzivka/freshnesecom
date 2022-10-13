import { Product } from '@common/type';
import { Box } from '@mui/material';
import { ProductsContext } from '@pages/all-products/AllProducts';
import { selectProductListSelector } from '@selectors/getProductListSelector';
import { useGetFarmsQuery } from '@services/ecommerce';
import { productListContainer } from '@styles/all-products/allProducts';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ProductListItem } from './ProductListItem';

export default function ProductList() {
  const productList = useContext(ProductsContext);
  const { data: farmsData } = useGetFarmsQuery();
  const filteredProducts = useSelector(selectProductListSelector(productList));

  return (
    <Box sx={productListContainer}>
      {filteredProducts?.map((product: Product) => (
        <ProductListItem
          key={product.id}
          product={product}
          farmsData={farmsData}
        />
      ))}
    </Box>
  );
}
