import { Product } from '@common/type';
import { productListContainer } from '@components/product-list/product-list/allProducts';
import { Box } from '@mui/material';
import { useGetFarmsQuery } from '@services/ecommerce';
import { getFilteredProducts } from '@store/selectors/getFilteredProducts';
import { useSelector } from 'react-redux';
import NoProducts from '../no-products/NoProducts';
import { ProductListItem } from '../product-list-item/ProductListItem';

export default function ProductList() {
  const { data: farmsData } = useGetFarmsQuery();

  const filteredProducts = useSelector(getFilteredProducts);

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
