import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      pink50: string;
      gray50: string;
      sage50: string;
      beige50: string;
      orange50: string;
      orange100: string;
      purple50: string;
      purple100: string;
      purple200: string;
      yellow100: string;
    };

    customShadows: {
      widget: string;
    };
  }
  interface ThemeOptions {
    customColors?: {
      pink50?: string;
      gray50?: string;
      sage50?: string;
      beige50?: string;
      orange50?: string;
      orange100?: string;
      purple50?: string;
      purple100?: string;
      purple200?: string;
      yellow100?: string;
    };

    customShadows?: {
      widget?: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: ['Mynerve', 'cursive'].join(','),
  },
  customColors: {
    pink50: '#eae1ed',
    gray50: '#d6d3d1',
    beige50: '#F5F5DC',
    orange50: '#efb782',
    orange100: '#ECA869',
    purple50: '#B08BBB',
    purple100: '#800080',
    purple200: '#aa00aa',
    yellow100: '#FFFF00',
  },
  customShadows: {
    widget:
      'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
  },
  palette: {
    background: {
      default: '#B08BBB',
    },
    primary: {
      main: '#ECA869',
    },
    text: {
      primary: '#ECA869',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
            backgroundColor: '#F5F5DC',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#B08BBB',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
            {
              backgroundColor: '#B08BBB',
            },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
            {
              backgroundColor: '#B08BBB',
            },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#b999c3',
            },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          padding: 0,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: '#626258',
          '&:before': {
            borderBottom: '0.5px solid #d6d3d1',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '0.5px solid #d6d3d1',
          },
          '&:after': {
            borderBottom: '0.5px solid #d6d3d1',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: '#626258',
        },
      },
    },
  },
});

export default theme;
