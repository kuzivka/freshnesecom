import { Header } from '@components/header/header/Header';
import ProductPhotos from '@components/product-info/product-photos/ProductPhotos';
import SelectedProductInfo from '@components/product-info/selected-product-info/SelectedProductInfo';
import { Box } from '@mui/material';
import { useGetSelectedProductQuery } from '@services/ecommerce';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mainContent } from './SelectedProductStyle';

export default function SelectedProduct() {
  const { id } = useParams();
  const { data: product, isSuccess } = useGetSelectedProductQuery(`${id}`);

  useEffect(() => window.scrollTo({ top: 0, behavior: 'auto' }), []);
  return (
    <Box >
      <Header />
      <Box sx={mainContent}>
        {isSuccess && (
          <>
            <ProductPhotos product={product} />
            <SelectedProductInfo product={product} />
          </>
        )}
      </Box>
    </Box>
  );
}
