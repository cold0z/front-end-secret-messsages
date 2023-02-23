import FavoritesContext from "@/store/context";
import { useContext } from "react";

export default function ItemBlog({ item }) {
  const favoriteCTX = useContext(FavoritesContext);

  const itemIsFavorite = favoriteCTX.itemIsFavorite(item.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCTX.removeFavorite(item.id);
    } else {
      favoriteCTX.addFavorite({
        id: item.id,
        title: item.title,
      });
    }
  }

  function clickHandler() {
    favoriteCTX.addFavorite(item);
  }

  return (
    <div className="col col-md-4">
      <div className="card ">
        <div className="card-body">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.completed ? "done" : "not done"}</p>
          <button className="btn-primary" onClick={clickHandler}>
            Favorite
          </button>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
