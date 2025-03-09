import { createTheme } from '@mui/material';
// const theme = [
//     "1A1A1A", black
//     "383638",
//     "FDBCD",
//     "FEFEFE",
//     "E5E7EB",
// ]
const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          
        },
      },
    },
  },
});

export default theme;
