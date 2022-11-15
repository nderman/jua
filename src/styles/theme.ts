import { createTheme } from '@mui/material/styles'
import Colors from './colors'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export const Theme = createTheme({
  palette: {
    primary: {
      main: Colors.BluePrimary,
      dark: Colors.BlueDark,
      light: Colors.BlueLight
    },
    secondary: {
      main: Colors.Black,
      dark: Colors.Black,
      light: Colors.TealLight
    },
    info: {
      main: Colors.Grey100,
      dark: Colors.Grey300,
      light: Colors.Grey200
    },
    background: {
      default: Colors.White
    },
    common: {
      black: Colors.Black,
      white: Colors.White
    },
    action: {
      disabledBackground: 'rgba(33, 101, 235, 0.3)',
      disabled: Colors.White
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          '& .Mui-disabled': {
            background: 'initial',
            color: 'initial',
            opacity: 0.7
          }
        }
      }
    }
  }
})
