import { CssBaseline, ThemeProvider } from "@material-ui/core";
import  {  Head } from "next/document";
import { Fragment, useEffect } from "react";
import "styles/globals.css";
import theme from "styles/abstract/theme";
import Footer from "components/molecules/footer/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
