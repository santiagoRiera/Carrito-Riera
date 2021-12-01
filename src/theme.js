import { createMuiTheme } from "@material-ui/core"

const theme2 = createMuiTheme({  
    palette:{
      primary:{
        main: '#fff9e7',
      },
      secondary:{
        main: '#212121'
      },
      warning:{
        main: '#4dabf5'
      },
    },
    typography: {
      fontFamily: ["'Lato'"]
    },
})

export default theme