import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { categoryFilter, resetFarms } from '@reducers/listSlice';
import { chip } from '@styles/all-products/productListTitle';
import { ChangeEvent, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesContext, ProductsContext } from '../../App';
import { RootState } from '../../store';

export default function CategoriesFilter() {
  const categories = useContext(CategoriesContext);
  const products = useContext(ProductsContext);
  const dispatch = useDispatch();
  const chosenCategory = useSelector(
    (state: RootState) => state.productList?.categoryFilter
  );

  const itemsInCategory = (id: number) => {
    return products?.allProducts?.filter((product) => product.category === id)
      .length;
  };

  const categoryRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) === chosenCategory) {
      dispatch(categoryFilter(undefined));
      dispatch(resetFarms());
    } else {
      dispatch(resetFarms());
      dispatch(categoryFilter(Number(event.target.value)));
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h5" sx={{ fontSize: '18px', fontWeight: '600' }}>
        Categories
      </Typography>

      <List
        sx={{ display: 'flex', flexDirection: 'column', gap: '12px', p: 0 }}
      >
        {categories?.map((category) => (
          <ListItem
            key={category.name}
            sx={{ p: 0, display: 'flex', justifyContent: 'space-between' }}
          >
            <FormControlLabel
              sx={{
                ml: '0',
              }}
              label={
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontFamily: 'Open Sans',
                    color: category.id === chosenCategory ? 'green' : undefined,
                    fontWeight:
                      category.id === chosenCategory ? '600' : undefined,
                  }}
                  variant="body1"
                >
                  {category.name}
                </Typography>
              }
              control={
                <Checkbox
                  value={category.id}
                  sx={{ display: 'none' }}
                  checked={category.id === chosenCategory}
                  onChange={categoryRadioChange}
                />
              }
            />
            <Chip label={itemsInCategory(category.id)} sx={chip} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
