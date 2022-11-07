import { Box } from '@mui/material';
import { SpinnerCircular } from 'spinners-react';
import { spinerContainer } from './SpinerStyle';

export default function Spiner() {
  return (
    <Box sx={spinerContainer}>
          <SpinnerCircular
            size={50}
            thickness={136}
            speed={98}
            color="rgba(70, 118, 10, 1)"
            secondaryColor="rgba(221, 221, 221, 1)"
          /></Box>
  )
}