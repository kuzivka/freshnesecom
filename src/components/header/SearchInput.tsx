import { ReactComponent as Search } from '@assets/svg/search.svg';
import {
  Divider,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
} from '@mui/material';
import { useGetCategoriesQuery } from '@services/ecommerce';
import {
  searchInput,
  searchInputButton,
  searchInputDivider,
  searchInputField,
  searchInputSelect,
} from '@styles/header-styles';
import { useState } from 'react';
import { SelectArrowIcon } from './SelectArrowIcon';

export default function SearchInput() {
  const [selectState, setSelectState] = useState('All Categories');
  const { data: categories } = useGetCategoriesQuery('');
  return (
    <Paper elevation={0} component="form" sx={searchInput}>
      <Select
        disableUnderline
        variant="standard"
        value={selectState}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="All"
        onChange={(e) => {
          setSelectState(e.target.value);
        }}
        IconComponent={SelectArrowIcon}
        sx={searchInputSelect}
      >
        <MenuItem value={'All Categories'}>All Categories</MenuItem>
        {categories &&
          categories.map(({ name }, i) => (
            <MenuItem key={i} value={name}>
              {name}
            </MenuItem>
          ))}
      </Select>
      <Divider sx={searchInputDivider} orientation="vertical" />
      <InputBase
        sx={searchInputField}
        placeholder="Search products, categories..."
      />
      <IconButton type="button" sx={searchInputButton} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
}
