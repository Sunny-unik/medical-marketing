import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="selection:bg-brandOrange selection:text-darkBG">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
