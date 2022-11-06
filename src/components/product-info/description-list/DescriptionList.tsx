import { Product } from '@common/type';
import { Box, List, ListItem, Typography } from '@mui/material';
import { C1 } from '@styles/colors';
import { getPriceAndStock } from '@utils/getPriceAndStock';
import { getUnits } from '@utils/getUnits';

interface DescriptionListProps {
  product: Product;
}

export default function DescriptionList({ product }: DescriptionListProps) {
  const units = getUnits(product);

  const description = {
    Country: product.country,
    Category: product.category,
    Stock: getPriceAndStock(product).inStock ? 'In stock' : 'Not available',
    Color: product.color,
    Size: product.name,
    'Buy by': units.join(', '),
    Delivery: `in ${product.deliveryIn} day${
      product.deliveryIn > 1 ? 's' : ''
    }`,
    'Delivery area': product.delivery,
  };
  return (
    <Box>
      <List
        sx={{
          height: '180px',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          width: 'fit-content',
        }}
      >
        {Object.entries(description).map(([key, value]) => (
          <ListItem>
            <Typography
              sx={{
                width: '100px',
                color: C1.C,
                fontSize: '14px',
                fontFamily: 'Open Sans',
              }}
            >
              {key}:
            </Typography>
            <Typography sx={{ fontSize: '14px', fontFamily: 'Open Sans' }}>
              {value}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
