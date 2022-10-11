import { Product } from '@common/type';
import { Box } from '@mui/material';
import { ProductContext } from '@pages/all-products/AllProducts';
import { useGetFarmsQuery } from '@services/ecommerce';
import { useContext } from 'react';
import { ProductListItem } from './ProductListItem';

export default function ProductList() {
  const data = useContext(ProductContext);
  const { data: farmsData } = useGetFarmsQuery(null);

  return (
    <Box
      sx={{p:'64px 45px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        alignItems: 'center',
      }}
    >
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
