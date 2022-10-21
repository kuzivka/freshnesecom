import { Product } from '@common/type';
import { Box } from '@mui/material';
import { getProductListSelector } from 'store/selectors/getProductListSelector';
import { useGetFarmsQuery, useGetProductsQuery } from '@services/ecommerce';
import { productListContainer } from '@components/product-list/styles/allProducts';
import { useSelector } from 'react-redux';
import NoProducts from './NoProducts';
import { ProductListItem } from './ProductListItem';

export default function ProductList() {
  const { data: farmsData } = useGetFarmsQuery();
  const { data: allProducts } = useGetProductsQuery();
  const filteredProducts = useSelector(getProductListSelector(allProducts));

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
