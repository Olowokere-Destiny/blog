import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { noto } from "@/lib/fontExports";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className={`${noto.className}`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
