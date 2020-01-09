import React from 'react'
import App, { Container } from 'next/app'
// import Base from '../comps/base';
// import 'styles/base';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp