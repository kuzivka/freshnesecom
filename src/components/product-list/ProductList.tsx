import { Product } from '@common/type';
import { Box } from '@mui/material';
import { useGetFarmsQuery } from '@services/ecommerce';
import { productListContainer } from '@styles/all-products/allProducts';
import { ProductsContext } from '../../App';
import { useContext } from 'react';
import NoProducts from './NoProducts';
import { ProductListItem } from './ProductListItem';

export default function ProductList() {
  const products = useContext(ProductsContext);
  const { data: farmsData } = useGetFarmsQuery();
  const filteredProducts = products?.filteredProducts

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
