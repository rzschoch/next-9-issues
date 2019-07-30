import App, { Container } from "next/app";

import React from "react";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const language = ctx.query.language || "de";
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx, { language });
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
