import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { categoryFilter, setFarmFilter } from 'store/reducers/listSlice';
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from '@services/ecommerce';
import { chip } from '@components/product-list/styles/productListTitle';
import {
  categoryCheckbox,
  categoryLabel,
  categoryListItem,
  categoryName,
  checkedCategoryName,
} from '@components/filters/styles/categoryFilter';
import {
  filterContainer,
  filterLabel,
  filterList,
} from '@components/filters/styles/filters';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function CategoriesFilter() {
  const { data: categories } = useGetCategoriesQuery();
  const { data: allProducts } = useGetProductsQuery();

  const dispatch = useDispatch();
  const chosenCategory = useSelector(
    (state: RootState) => state.productList?.categoryFilter
  );

  const itemsInCategory = (id: number) => {
    return allProducts?.filter((product) => product.category === id).length;
  };

  const categoryRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) === chosenCategory) {
      dispatch(categoryFilter('all'));
      dispatch(setFarmFilter([]));
    } else {
      dispatch(setFarmFilter([]));
      dispatch(categoryFilter(Number(event.target.value)));
    }
  };

  return (
    <Box sx={filterContainer}>
      <Typography variant="h5" sx={filterLabel}>
        Categories
      </Typography>

      <List sx={filterList}>
        {categories?.map((category) => (
          <ListItem key={category.name} sx={categoryListItem}>
            <FormControlLabel
              sx={categoryLabel}
              label={
                <Typography
                  sx={
                    category.id === chosenCategory
                      ? checkedCategoryName
                      : categoryName
                  }
                  variant="body1"
                >
                  {category.name}
                </Typography>
              }
              control={
                <Checkbox
                  value={category.id}
                  sx={categoryCheckbox}
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
