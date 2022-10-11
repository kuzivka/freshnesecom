import { Product } from '@common/type';
import { Box } from '@mui/material';
import { useGetFarmsQuery, useGetProductsQuery } from '@services/ecommerce';
import { ProductListItem } from './ProductListItem';

export default function ProductList() {
  const { data } = useGetProductsQuery(null);
  const { data: farmsData} = useGetFarmsQuery(null);
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {data && farmsData &&
        data.map((product: Product) => <ProductListItem product={product} farms={farmsData} />)}
    </Box>
  );
}
