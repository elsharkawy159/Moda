import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700%7CPoppins:300,400,500,600,700"
        />
        <link rel="stylesheet" href="/css/mdb.min.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <body>
        <Main />
        <script src="/js/mdb.min.js"></script>
        <NextScript />
      </body>
    </Html>
  );
}
