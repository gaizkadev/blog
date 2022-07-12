import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es" className="scroll-smooth">
        <Head />
        <body className='min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-400'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
