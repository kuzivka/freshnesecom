import { Product } from '@common/type';
import { Box } from '@mui/material';
import { ProductsContext } from '@pages/all-products/AllProducts';
import { useGetFarmsQuery } from '@services/ecommerce';
import { productListContainer } from '@styles/all-products/allProducts';
import { useContext } from 'react';
import NoProducts from './NoProducts';
import { ProductListItem } from './ProductListItem';

export default function ProductList() {
  const productList = useContext(ProductsContext);
  const { data: farmsData } = useGetFarmsQuery();

  return (
    <Box sx={productListContainer}>
      {!productList?.length ? (
        <NoProducts />
      ) : (
        productList.map((product: Product) => (
          <ProductListItem
            key={product.id}
            product={product}
            farmsData={farmsData}
          />
        ))
      )}
    </Box>
  );
}
