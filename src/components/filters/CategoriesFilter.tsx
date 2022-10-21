import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { categoryFilter, setFarmFilter } from '@reducers/listSlice';
import { useGetCategoriesQuery } from '@services/ecommerce';
import { chip } from '@styles/all-products/productListTitle';
import {
  categoryCheckbox,
  categoryLabel,
  categoryListItem,
  categoryName,
  checkedCategoryName,
} from '@styles/filters/categoryFilter';
import {
  filterContainer,
  filterLabel,
  filterList,
} from '@styles/filters/filters';
import { ChangeEvent, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsContext } from '../../App';
import { RootState } from '../../store';

export default function CategoriesFilter() {
  const { data: categories } = useGetCategoriesQuery();
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
