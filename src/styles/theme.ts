import { createTheme } from '@mui/material/styles';
import { C1, C2 } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: C2.A,
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    allVariants: {
      color: C1.A,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: 'Open Sans',
          textDecorationLine: 'none',
          color: C2.A,
        },
      },
    },
  },
});
