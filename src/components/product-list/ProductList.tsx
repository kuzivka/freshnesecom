import { Product } from '@common/type';
import { Box } from '@mui/material';
import { useGetFarmsQuery } from '@services/ecommerce';
import { productListContainer } from '@styles/all-products/allProducts';
import { ProductsContext } from '../../App';
import { useContext } from 'react';
import NoProducts from './NoProducts';
import { ProductListItem } from './ProductListItem';

export default function ProductList() {
  const filteredProducts = useContext(ProductsContext);
  const { data: farmsData } = useGetFarmsQuery();

  return (
    <Box sx={productListContainer}>
      {!filteredProducts?.length ? (
        <NoProducts />
      ) : (
        filteredProducts.map((product: Product) => (
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
