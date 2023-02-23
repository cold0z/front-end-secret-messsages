import { useEffect } from "react";
import ItemBlog from "./ItemBlog";

export default function ListBlog(props) {
 
  return (
    <div className="row">
      {/* {props.data.map((item) => {
        return <ItemBlog key={item.id} item={item} />;
      })} */}

      {props.data.map((item) => (
         <ItemBlog key={item.id} item={item} />
      ))}
    </div>
  );
}
