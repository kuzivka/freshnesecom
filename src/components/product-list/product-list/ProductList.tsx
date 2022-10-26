import { Product } from '@common/type';
import { Box } from '@mui/material';
import { useGetFarmsQuery } from '@services/ecommerce';
import NoProducts from '../no-products/NoProducts';
import { ProductListItem } from '../product-list-item/ProductListItem';
import { productListContainer } from './ProductListStyle';

interface ProductListProps {
  productsToShow: Product[];
}

export default function ProductList({ productsToShow }: ProductListProps) {
  const { data: farmsData } = useGetFarmsQuery();

  return (
    <Box sx={productListContainer}>
      {!productsToShow?.length ? (
        <NoProducts />
      ) : (
        productsToShow?.map((product: Product) => (
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
