import '../styles/globals.css'
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {

  const theme = {
    mobile: `(max-width: 476px)`,
    tablet: `(max-width: 765px)`, 
    laptop: `(max-width: 990px)`,
  };

  return (
  <ThemeProvider theme={theme}>

  <Component {...pageProps} />
  </ThemeProvider>)
}

export default MyApp
