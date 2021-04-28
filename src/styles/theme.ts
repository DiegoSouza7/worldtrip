import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

export const theme = extendTheme({
  colors: {
    gray: {
      "500": "#47585B",
      "400": "#999999"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.500'    
      }
    }
  },
  breakpoints
})