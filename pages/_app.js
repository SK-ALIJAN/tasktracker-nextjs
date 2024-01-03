import "@/styles/globals.css";
import { ContextProvider } from "@/ContextApi";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
