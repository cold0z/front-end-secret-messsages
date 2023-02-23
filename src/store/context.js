import { createContext, useState } from "react";
const FavoritesContext = createContext();

// export function FovoriteProvider(props) {
//   [userFavorite, setUserFavortie] = useState([]);

//   function addFavortieHandler(fovorite) {
//     // const newFavortie = [...userFavorite, fovorite];
//     setUserFavortie((prevUserFavorite)=>{return prevUserFavorite.concat(fovorite) });
//   }

//   function removeFavortie(fovorite) {
//     const newFavortie = userFavorite.filter((item) => item !== fovorite);
//     setUserFavortie(newFavortie);
//   }

//   const context = {
//     favorite: userFavorite,
//     total: userFavorite.length,
//     addFavortie: addFavortieHandler,
//   };

//   return (
//     <FovoriteContext.Provider value={context}>
//       {props.children}
//     </FovoriteContext.Provider>
//   );
// }

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    console.log("addFavoriteHandler", favoriteMeetup);

    const newFavortie = [...userFavorites, favoriteMeetup];
    setUserFavorites(newFavortie);
    // setUserFavorites((prevUserFavorites) => {
    //   return prevUserFavorites.concat(favoriteMeetup);
    // });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
