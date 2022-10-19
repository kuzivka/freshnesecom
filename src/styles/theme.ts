import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
      primary: {
        main: '#6A983C',
      },
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      allVariants: {
        color: '#151515',
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            fontFamily: 'Open Sans',
            textDecorationLine: 'none',
            color: '#6A983C',
          },
        },
      },
    },
  });