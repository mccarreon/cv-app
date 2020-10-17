import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    props: {
        MuiTypography: {
            variantMapping: {
                h2: 'h1'
            }
        }
    }
})

export default theme