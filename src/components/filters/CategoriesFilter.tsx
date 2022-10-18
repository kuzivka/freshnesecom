import { Box, Chip, List, ListItem, Typography } from '@mui/material';
import { chip } from '@styles/all-products/productListTitle';
import { CategoriesContext, ProductsContext } from '../../App';
import { useContext } from 'react';

export default function CategoriesFilter() {
  const categories = useContext(CategoriesContext);
  const products = useContext(ProductsContext);

  const itemsInCategory = (id: number) => {
    let productsNumber = 0;
    if (products) {
      for (const product of products) {
        if (product.category === id) {
          productsNumber += 1;
        }
      }
    }
    return productsNumber;
  };

  return (
    <Box>
      <Typography variant="h5">Categories</Typography>
      <List>
        {categories?.map((category) => (
          <ListItem>
            <Typography>{category.name}</Typography>
            <Chip label={itemsInCategory(category.id)} sx={chip} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
