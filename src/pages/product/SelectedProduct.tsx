import { Header } from '@components/header/header/Header';
import ProductPhotos from '@components/product-info/product-photos/ProductPhotos';
import SelectedProductInfo from '@components/product-info/selected-product-info/SelectedProductInfo';
import { Box } from '@mui/material';
import { useGetSelectedProductQuery } from '@services/ecommerce';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import { mainContent } from './SelectedProductStyle';

export default function SelectedProduct() {
  const { id } = useParams();

  const { data: product, isLoading } = useGetSelectedProductQuery(`${id}`);

  useEffect(() => window.scrollTo({ top: 0, behavior: 'auto' }), []);
  return (
    <Box >
      <Header />
      <Box sx={mainContent}>
        {isLoading ? (
          <SpinnerCircular
            size={50}
            thickness={136}
            speed={98}
            color="rgba(70, 118, 10, 1)"
            secondaryColor="rgba(221, 221, 221, 1)"
          />
        ) : (
          <>
            <ProductPhotos product={product} />
            <SelectedProductInfo product={product} />
          </>
        )}
      </Box>
    </Box>
  );
}
