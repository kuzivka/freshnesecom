import {
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { setFarmFilter } from '@reducers/listSlice';
import { useGetFarmsQuery } from '@services/ecommerce';
import {
  barndCheckboxLabel,
  brandCheckbox,
  brandListItem,
  brandName,
} from '@styles/filters/brand-filter';
import {
  filterContainer,
  filterLabel,
  filterList,
} from '@styles/filters/filters';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function BrandFilter() {
  const { data: farms } = useGetFarmsQuery();
  const dispatch = useDispatch();

  const farmsToFilter = useSelector(
    (state: RootState) => state.productList.farmFilter,
    shallowEqual
  );
  const chosenCategory = useSelector(
    (state: RootState) => state.productList.categoryFilter
  );
  const [checkedFarms, setCheckedFarms] = useState(farmsToFilter);

  const checkboxChangeHandler = useCallback(
    (farmId: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const farmsSet = new Set(checkedFarms);
      if (event.target.checked) {
        setCheckedFarms(Array.from(farmsSet.add(farmId)));
      } else if (!event.target.checked) {
        farmsSet.delete(farmId);
        setCheckedFarms(Array.from(farmsSet));
      }
    },
    [checkedFarms]
  );

  const farmsByCategory = farms?.filter(
    (farm) => farm.categoryId === chosenCategory || chosenCategory === 'all'
  );

  const isChecked = (farmId: number) => farmsToFilter.includes(farmId);
  useEffect(() => {
    setCheckedFarms(farmsToFilter);
  }, [farmsToFilter]);
  useEffect(() => {
    dispatch(setFarmFilter(checkedFarms));
  }, [checkedFarms, dispatch]);

  return (
    <Box sx={filterContainer}>
      <Typography variant="h5" sx={filterLabel}>
        Brands
      </Typography>
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
    </Box>
  );
}
