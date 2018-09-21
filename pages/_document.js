import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:500,600" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
          <link rel="manifest" href="static/manifest.json" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="theme-color" content="#317EFB"/>
          <meta name="Description" content="Good issues to you start in the open source projects world."/>


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}