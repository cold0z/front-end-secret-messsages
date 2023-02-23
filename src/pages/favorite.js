import ListBlog from "@/blog/ListBlog";
import FavoritesContext, { FavoritesContextProvider } from "@/store/context";
import { useContext, useEffect, useState } from "react";
import Layout from "./Layout";

export default function Favorite() {
  const FavoriteCTX = useContext(FavoritesContext);
  return (

    <Layout>
      <h2>Favorite</h2>
      <ListBlog data={FavoriteCTX.favorites} />
    </Layout>
  );
  
}
