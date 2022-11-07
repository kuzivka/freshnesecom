import { Product } from '@common/type';
import { Box, List, ListItem, Typography } from '@mui/material';
import { useGetCategoriesQuery } from '@services/ecommerce';
import { getPriceAndStock } from '@utils/getPriceAndStock';
import { getUnits } from '@utils/getUnits';
import {
    descriptionList,
    descriptionListItem,
    descriptionProperty,
    descriptionValue
} from './DescriptionListStyle';

interface DescriptionListProps {
  product: Product;
}

export default function DescriptionList({ product }: DescriptionListProps) {
  const units = getUnits(product);
  const { data: categories } = useGetCategoriesQuery();
  const categoryName = categories?.find(
    (category) => category.id === product.category
  )?.name;

  const description = {
    Country: product.country,
    Category: categoryName,
    Stock: getPriceAndStock(product).inStock ? 'In stock' : 'Not available',
    Color: product.color,
    Size: product.size,
    'Buy by': units.join(', '),
    Delivery: `in ${product.deliveryIn} day${
      product.deliveryIn > 1 ? 's' : ''
    }`,
    'Delivery area': product.delivery,
  };
  return (
    <Box>
      <List sx={descriptionList}>
        {Object.entries(description).map(([key, value]) => (
          <ListItem sx={descriptionListItem}>
            <Typography sx={descriptionProperty}>{key}:</Typography>
            <Typography sx={descriptionValue}>{value}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
