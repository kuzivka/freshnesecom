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
import { getSortingOptionString } from '@utils/getSortingOptionString';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SortIcon } from '../sort-icon/SortIcon';
import {
  selectCaption,
  selectContainer,
  selectForSorting,
  selectSorting,
  sortingOption,
} from './SelectForSortingStyle';

export default function SelectForSorting() {
  const dispatch = useDispatch();

  const sortOptions = useMemo(
    () => Object.values(SortBy).map((option) => option),
    []
  );

  const sortingOrder = useSelector(
    (state: RootState) => state.productList.sortBy
  );

  const sortOptionChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      dispatch(setSortingOrder(event.target.value));
    },
    [dispatch]
  );
  return (
    <Box sx={selectContainer}>
      <Paper elevation={0} component="form" sx={selectForSorting}>
        <Typography variant="caption" sx={selectCaption}>
          Sort by
        </Typography>
        <Divider orientation="vertical" />
        <Select
          sx={selectSorting}
          onChange={sortOptionChange}
          disableUnderline
          variant="standard"
          value={sortingOrder}
          IconComponent={SortIcon}
        >
          {sortOptions.map((option) => (
            <MenuItem sx={sortingOption} key={option} value={option}>
              {getSortingOptionString(option)}
            </MenuItem>
          ))}
        </Select>
      </Paper>
    </Box>
  );
}
