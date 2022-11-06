import { Product } from '@common/type';
import { Box } from '@mui/material';
import DescriptionList from '../description-list/DescriptionList';
import PricePanel from '../price-panel/PricePanel';
import ProductHeader from '../product-header/ProductHeader';

interface SelectedProductInfoProps {
  product: Product;
}

export default function SelectedProductInfo({
  product,
}: SelectedProductInfoProps) {
  const getCategoryName = () => {};
  return (
    <Box sx={{ width: '50%', display:'flex', flexDirection:'column', gap:'40px' }}>
      <ProductHeader product={product} />
      <DescriptionList product={product} />
      <PricePanel product={product} />
    </Box>
  );
}
