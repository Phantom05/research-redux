import Document, { Html, Head, Main, NextScript } from 'next/document'

// 이부분도 터미널로 확인해야함.
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <title>Next.js</title>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument