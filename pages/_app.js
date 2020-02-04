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
          <title>Neev.io – Premium Javascript Frontend Consultancy</title>
          <meta
            property="og:title"
            content="Neev –– Professional Software Consultancy"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://neev.io/" />
          <meta
            property="og:description"
            content="Neev.io is a premium javascript frontend consultancy with strong expertise in React.js, Vue.js, TailwindCSS, Webpack, Babel, Node.js, Typescript etc."
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/assets/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/assets/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/assets/favicon-16x16.png" />
          <link rel="manifest" href="/static/assets/site.webmanifest" />
          <link rel="mask-icon" href="/static/assets/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}

export default withGA("UA-142499494-1", Router)(Neev);
