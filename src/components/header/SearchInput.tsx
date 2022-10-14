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
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SelectArrowIcon } from './SelectArrowIcon';

export default function SearchInput() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();

  const { data: categories } = useGetCategoriesQuery();
  const selectChangeHandler = useCallback((event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchProducts(searchQuery));
    }, 500);
    return () => clearTimeout(timer);
  }, [dispatch, searchQuery]);

  const handleSearchQueryChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value.replace(/[^\w\s]/gi, '').trim());
    },
    []
  );

  return (
    <Paper elevation={0} component="form" sx={searchInput}>
      <Select
        disableUnderline
        variant="standard"
        value={selectedCategory}
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
