import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { UserProvider } from "@/components/shared-components/providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}