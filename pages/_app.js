import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

class Neev extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans:400,800,800i,900&display=swap"
            rel="stylesheet"
          />

          <title>Neev –– Software Consultancy</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            class="jsx-3082592417 next-head"
          />

          <meta
            property="og:title"
            content="Neev –– Professional Software Consultancy"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://neev.io/" />
          {/* <meta property="og:image" content="/static/flowboardpro.svg" /> */}
          <meta
            property="og:description"
            content="Neev Labs –– Our Solutions Makes Businesses Productive"
          />
        </Head>

        <Component {...pageProps} />
      </Container>
    );
  }
}

export default Neev;
