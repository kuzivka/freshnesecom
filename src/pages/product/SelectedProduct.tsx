import { Category } from '@common/type';
import { Header } from '@components/header/header/Header';
import MoreProductsHeader from '@components/product-info/more-products/more-products-header/MoreProductsHeader';
import MoreProductsList from '@components/product-info/more-products/more-products-list/MoreProductsList';
import ProductPhotos from '@components/product-info/product-photos/ProductPhotos';
import SelectedProductInfo from '@components/product-info/selected-product-info/SelectedProductInfo';
import Spiner from '@components/spiner/Spiner';
import { Box } from '@mui/material';
import {
  useGetCategoriesQuery,
  useGetSelectedProductQuery,
} from '@services/ecommerce';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  mainContent,
  moreProductsContainer,
  pageContainer,
} from './SelectedProductStyle';

export default function SelectedProduct() {
  const { id } = useParams();

  const { data: product, isLoading } = useGetSelectedProductQuery(`${id}`);

  const { data: categories } = useGetCategoriesQuery();
  const category = categories?.find(
    (category: Category) => category.id === product?.category
  );

  useEffect(() => window.scrollTo({ top: 0, behavior: 'auto' }), [product]);
  return (
    <Box sx={pageContainer}>
      <Header />
      {isLoading && <Spiner />}
      {!isLoading && (
        <>
          <Box sx={mainContent}>
            <ProductPhotos product={product} />
            <SelectedProductInfo
              categoryName={category?.name}
              product={product}
            />
          </Box>

          <Box sx={moreProductsContainer}>
            {product && category && (
              <>
                <MoreProductsHeader categoryId={category.id} />
                <MoreProductsList
                  productId={product?.id}
                  categoryId={category.id}
                />
              </>
            )}
          </Box>
        </>
      )}
    </Box>
  );
}
