import { ReactComponent as Search } from '@assets/svg/search.svg';
import {
  Divider,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { searchProducts } from '@reducers/listSlice';
import { useGetCategoriesQuery } from '@services/ecommerce';
import {
  searchInput,
  searchInputButton,
  searchInputDivider,
  searchInputField,
  searchInputSelect,
} from '@styles/header/headerStyles';
import { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SelectArrowIcon } from './SelectArrowIcon';

export default function SearchInput() {
  const [selectState, setSelectState] = useState('All Categories');

  const { data: categories } = useGetCategoriesQuery();
  const selectChangeHandler = useCallback((event: SelectChangeEvent) => {
    setSelectState(event.target.value);
  }, []);

  const dispatch = useDispatch();

  const handleSearchQueryChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value.replace(/[^\w\s]/gi, '').trim();
      dispatch(searchProducts(inputValue));
    },
    [dispatch]
  );

  return (
    <Paper elevation={0} component="form" sx={searchInput}>
      <Select
        disableUnderline
        variant="standard"
        value={selectState}
        onChange={selectChangeHandler}
        IconComponent={SelectArrowIcon}
        sx={searchInputSelect}
      >
        <MenuItem value={'All Categories'}>All Categories</MenuItem>
        {categories?.map(({ name, id }) => (
          <MenuItem key={id} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
      <Divider sx={searchInputDivider} orientation="vertical" />
      <InputBase
        sx={searchInputField}
        placeholder="Search Products, categories..."
        onChange={handleSearchQueryChange}
      />
      <IconButton type="button" sx={searchInputButton} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
}
