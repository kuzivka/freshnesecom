import { SortBy } from '@common/enums';
import {
  Box,
  Divider,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { setSortingOrder } from '@store/reducers/listSlice';
import { RootState } from '@store/store';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SortIcon } from '../sort-icon/SortIcon';
import { selectForSorting } from './SelectForSortingStyle';

export default function SelectForSorting() {
  const dispatch = useDispatch();

  const sortOptions = useMemo(
    () => Object.keys(SortBy).map((option) => option),
    []
  );

  const sortingOrder = useSelector(
    (state: RootState) => state.productList.sortBy
  );
  const getSortOptionString = (key: string) => {
    const indexOfValue = Object.keys(SortBy).indexOf(key);
    return Object.values(SortBy)[indexOfValue];
  };

  const sortOptionChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      dispatch(setSortingOrder(event.target.value));
    },
    [dispatch]
  );
  return (
    <Box sx={{ display: 'flex', p: '16px 48px' }}>
      <Paper elevation={0} component="form" sx={selectForSorting}>
        <Typography variant="caption" sx={{ fontSize: '14px' }}>
          Sort by
        </Typography>
        <Divider orientation="vertical" />
        <Select
          sx={{ p: 0, fontSize: '12px', fontWeight: '600' }}
          onChange={sortOptionChange}
          disableUnderline
          variant="standard"
          value={sortingOrder}
          IconComponent={SortIcon}
        >
          {sortOptions.map((option, index) => (
            <MenuItem
              sx={{ fontSize: '12px', fontWeight: '600' }}
              key={option}
              value={option}
            >
              {getSortOptionString(option)}
            </MenuItem>
          ))}
        </Select>
      </Paper>
    </Box>
  );
}
