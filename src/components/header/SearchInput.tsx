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
import { categoryFilter, resetFarms, searchProducts } from '@reducers/listSlice';
import {
  searchInput,
  searchInputButton,
  searchInputDivider,
  searchInputField,
  searchInputSelect,
} from '@styles/header/headerStyles';
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { CategoriesContext } from '../../App';
import { SelectArrowIcon } from './SelectArrowIcon';

export default function SearchInput() {
  const dispatch = useDispatch();
  const categories = useContext(CategoriesContext);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedCategoryId = useSelector(
    (state: RootState) => state.productList.categoryFilter
  );

  const selectChangeHandler = (event: SelectChangeEvent) => {
    dispatch(resetFarms())
    dispatch(categoryFilter(event.target.value));
  };

  const handleSearchQueryChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value.replace(/[^\w\s]/gi, '').trim());
    },
    []
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchProducts(searchQuery));
    }, 500);
    return () => clearTimeout(timer);
  }, [dispatch, searchQuery]);

  return (
    <Paper elevation={0} component="form" sx={searchInput}>
      <Select
        disableUnderline
        variant="standard"
        value={`${selectedCategoryId}`}
        onChange={selectChangeHandler}
        IconComponent={SelectArrowIcon}
        sx={searchInputSelect}
      >
        <MenuItem value={'undefined'}>All Categories</MenuItem>
        {categories?.map(({ name, id }) => (
          <MenuItem key={id} value={id}>
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
