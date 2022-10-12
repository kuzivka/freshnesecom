import { Product } from '@common/type';
import { Box } from '@mui/material';
import { ProductContext } from '@pages/all-products/AllProducts';
import { useGetFarmsQuery } from '@services/ecommerce';
import { productListContainer } from '@styles/all-products';
import { useContext } from 'react';
import { ProductListItem } from './ProductListItem';

export default function ProductList() {
  const data = useContext(ProductContext);
  const { data: farmsData } = useGetFarmsQuery(null);

  return (
    <Box sx={productListContainer}>
      {data &&
        farmsData &&
        data.map((product: Product) => (
          <ProductListItem
            key={product.id}
            product={product}
            farms={farmsData}
          />
        ))}
    </Box>
  );
}
