import ListBlog from "@/blog/ListBlog";
import { FavoritesContextProvider } from "@/store/context";
import { useEffect, useState } from "react";
import Layout from "./Layout";

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.warn("me runnining...");
        setData(json);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Is Loading</p>;
  }
  return (
    <Layout>
      <h2>List Blog</h2>
      <ListBlog data={data} />
    </Layout>
  );
}
