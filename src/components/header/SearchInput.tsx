import { ReactComponent as Arrow } from '@assets/svg/arrow.svg';
import { ReactComponent as Search } from '@assets/svg/search.svg';
import { categories } from '@common/constants';
import {
  Divider,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
} from '@mui/material';
import {
  searchInput,
  searchInputButton,
  searchInputDivider,
  searchInputField,
  searchInputSelect,
} from '@styles/header-styles';
import { useState } from 'react';

export default function SearchInput() {
  const [selectState, setSelectState] = useState('All Categories');

  return (
    <Paper elevation={0} component="form" sx={{ ...searchInput }}>
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
        IconComponent={Arrow}
        sx={{ ...searchInputSelect }}
      >
        <MenuItem value={'All Categories'}>All Categories</MenuItem>
        {categories.map((category) => (
          <MenuItem value={category.name}>{category.name}</MenuItem>
        ))}
      </Select>
      <Divider sx={{ ...searchInputDivider }} orientation="vertical" />
      <InputBase
        sx={{ ...searchInputField }}
        placeholder="Search products, categories..."
      />
      <IconButton
        type="button"
        sx={{ ...searchInputButton }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
}
