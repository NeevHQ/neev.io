import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import withGA from "next-ga";

class Neev extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,900&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" type="image/png" href="/static/assets/neev.ico" />

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
      </>
    );
  }
}

export default withGA("UA-142499494-1", Router)(Neev);