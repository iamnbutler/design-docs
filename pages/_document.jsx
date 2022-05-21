import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="relative w-screen min-h-screen overflow-x-hidden bg-base00">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
