import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  // state and dark mode controls
  // const lsTheme = localStorage.getItem("dark")
  const [dark, setDark] = useState(true);
  
  useEffect(() => {
    const storageTheme = localStorage.getItem("dark");
    if (storageTheme === "true") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", dark.toString());
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <NavBar dark={dark} setDark={setDark} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
