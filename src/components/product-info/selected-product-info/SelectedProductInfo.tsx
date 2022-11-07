import { Product } from '@common/type';
import { Box } from '@mui/material';
import { useGetCategoriesQuery } from '@services/ecommerce';
import DescriptionList from '../description-list/DescriptionList';
import PricePanel from '../price-panel/PricePanel';
import ProductHeader from '../product-header/ProductHeader';
import { selectedProductInfoContainer } from './SelectedProductInfoStyle';

interface SelectedProductInfoProps {
  product: Product | undefined;
}

export default function SelectedProductInfo({
  product,
}: SelectedProductInfoProps) {
 
  return (
    <>
    {product && (<Box sx={selectedProductInfoContainer}>
      <ProductHeader product={product} />
      <DescriptionList product={product} />
      <PricePanel product={product} />
    </Box>)}</>
  );
}
