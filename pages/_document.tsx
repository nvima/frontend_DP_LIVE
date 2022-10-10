import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

interface Props {
  locale: string
}

class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang={process.env.NEXT_PUBLIC_LOCALE}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
