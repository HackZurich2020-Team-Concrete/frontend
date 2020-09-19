import { grey } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

export const createTheme = () => createMuiTheme({
    palette: {
      common: {
        white: '#fff',
        black: '#000',
        grey: grey[200],
      },
    //   primary: {
    //     main: '#1f2d54',
    //   },
    //   secondary: {
    //     main: '#e8462b',
    //   },
    //   info: {
    //     main: grey[700],
    //     contrastText: '#fff',
    //   },
    //   error: {
    //     main: red.A400,
    //   },
    //   background: {
    //     default: '#fff',
    //   },
    },
    typography: {
      h1: {
        fontSize: '3.5rem',
      },
      h2: {
        fontSize: '3rem',
      },
      h3: {
        fontSize: '2.5rem',
      },
      h4: {
        fontSize: '2rem',
      },
      body1: {
        fontSize: '1.2em',
      },
      body2: {
        fontSize: '.9rem',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 540,
        md: 970,
        lg: 1080,
        xl: 1280,
      },
    },
});
