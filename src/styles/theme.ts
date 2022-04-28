import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "600": "#47585B",
            "400": "#999999",
            "100": "#DADADA",
            "50": "#F5F8FA",
        },
        yellow: {
            "500": "#FFBA08",
        }
        
    },
    fonts: {
        heading: 'Poppins, sans-serif',
        body: 'Poppins, sans-serif',
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.600'
            }
        }
    }
})