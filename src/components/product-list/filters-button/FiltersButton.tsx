import FilterBar from '@components/filters/filter-bar/FilterBar';
import { Box, Button, SwipeableDrawer } from '@mui/material';
import React from 'react';
import {
  drawerContainer,
  drawerOpenButtonContainer,
  openDrawerButton,
} from './FiltersButtonStyle';

export default function FiltersButton() {
  const [state, setState] = React.useState(false);
  const toggleDrawer = () => {
    setState(!state);
  };
  return (
    <Box sx={drawerOpenButtonContainer} onClick={toggleDrawer}>
      <Button sx={openDrawerButton}>Apply filters</Button>
      <SwipeableDrawer
        PaperProps={drawerContainer}
        anchor="left"
        open={state}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <FilterBar inDrawer />
      </SwipeableDrawer>
    </Box>
  );
}
