import { ReactComponent as Arrow } from '@assets/svg/arrow.svg';
import { ReactComponent as Search } from '@assets/svg/search.svg';
import {
  Divider,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
} from '@mui/material';
import { useState } from 'react';

export default function SearchInput() {
  const [selectState, setSelectState] = useState('All Categories');

  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        backgroundColor: '#F9F9F9',
        border: '2px solid #ddd',
        p: '0 12px',
        display: 'flex',
        alignItems: 'center',
        width: 500,
        height: '42px',
        borderRadius: '20px',
      }}
    >
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
        sx={{ width: 200, pr: '15px' }}
      >
        <MenuItem value={'All Categories'}>All Categories</MenuItem>
        <MenuItem value={'Category 2'}>Twenty</MenuItem>
        <MenuItem value={'Category 3'}>Thirty</MenuItem>
      </Select>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search products, categories..."
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <Search />
      </IconButton>
      
    </Paper>
  );
}
