import { createTheme } from "@mui/material"

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
      overlay: true;
      text: true;
    }
  }

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#242424'
        },
        primary: {
            main: '#8b0000'
        },
    },
    components: {
        MuiPaper: {
            variants: [ 
                {
                    props: { variant: 'overlay'},
                    style: {
                        opacity: '.5',
                        position: 'absolute',
                        width: '500px',
                        height: '255px'
                    }
                },
                {
                    props: { variant: 'text'},
                    style: {
                        opacity: '.5',
                        position: 'absolute',
                        width: '500px',
                        height: '100px'
                    }
                }
            ]
        }
    }
})

export default theme