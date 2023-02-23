import { FavoritesContextProvider } from "@/store/context";

export default function App({ Component, pageProps }) {
  return     <FavoritesContextProvider>
  <Component {...pageProps} /></FavoritesContextProvider>
}
