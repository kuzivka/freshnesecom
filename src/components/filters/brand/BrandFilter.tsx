import Spiner from '@components/spiner/Spiner';
import {
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useGetFarmsQuery } from '@services/ecommerce';
import { setFarmFilter } from '@store/reducers/listSlice';
import { RootState } from '@store/store';
import { ChangeEvent, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { filterContainer, filterLabel, filterList } from '../FilterStyles';
import {
  barndCheckboxLabel,
  brandCheckbox,
  brandListItem,
  brandName,
} from './BrandFilterStyles';

export default function BrandFilter() {
  const { data: farms, isLoading } = useGetFarmsQuery();
  const dispatch = useDispatch();

  const farmsToFilter = useSelector(
    (state: RootState) => state.productList.farmFilter,
    shallowEqual
  );
  const chosenCategory = useSelector(
    (state: RootState) => state.productList.categoryFilter
  );

  const checkboxChangeHandler = useCallback(
    (farmId: number) =>
      (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        dispatch(setFarmFilter(farmId));
      },
    [dispatch]
  );

  const farmsByCategory = farms?.filter(
    (farm) => farm.categoryId === chosenCategory || chosenCategory === 'all'
  );

  const isChecked = useCallback(
    (farmId: number) => farmsToFilter.includes(farmId),
    [farmsToFilter]
  );

  return (
    <Box sx={filterContainer}>
      <Typography variant="h5" sx={filterLabel}>
        Brands
      </Typography>
      {isLoading ? (
        <Spiner />
      ) : (
        <List sx={filterList}>
          {farmsByCategory?.map((farm) => (
            <ListItem key={farm.id} sx={brandListItem}>
              <FormControlLabel
                sx={barndCheckboxLabel}
                label={
                  <Typography sx={brandName} variant="body1">
                    {farm.name}
                  </Typography>
                }
                control={
                  <Checkbox
                    value={farm.id}
                    sx={brandCheckbox}
                    checked={isChecked(farm.id)}
                    onChange={checkboxChangeHandler(farm.id)}
                  />
                }
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
