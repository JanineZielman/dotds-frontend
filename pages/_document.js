import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://cdn.cloudmersive.com/jsclient/cloudmersive-nlp-client.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/script.js"></script>
          <script src="/balls.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
