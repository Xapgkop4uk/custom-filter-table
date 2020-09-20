import {createMuiTheme, colors} from '@material-ui/core';

export default createMuiTheme({
  palette: {
    type: 'dark',
    secondary: {
      main: colors.common.white,
      dark: colors.common.white,
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        iconFilled: {
          color: '#000',
        },
      },
    },
  },
});
