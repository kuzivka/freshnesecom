import {
  Box,
  Divider,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material';
import { useState } from 'react';
export default function SelectForSorting() {
  const [sortState, setSortOption] = useState(undefined);
  return (
    <Box sx={{ display: 'flex', p: '16px 48px' }}>
      <Paper
        elevation={0}
        component="form"
        sx={{
          border: '2px solid blue',
          display: 'flex',
          width: '180px',
          p: '9px 16px',
          gap: '24px',
        }}
      >
        <Typography variant='caption' sx={{fontSize:'14px'}}>fdhgjh</Typography>
        <Divider orientation="vertical" />
        <Select
          sx={{ p: 0, fontSize:'12px' }}
          disableUnderline
          variant="standard"
          // IconComponent={SelectArrowIcon}
        >
          <MenuItem value={sortState}>s</MenuItem>
          {/* {options.map(() => (
          <MenuItem key={} value={}>
            {}
          </MenuItem>
        ))} */}
        </Select>
      </Paper>
    </Box>
  );
}
