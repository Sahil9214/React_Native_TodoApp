import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourites: () => {},
});

function FavouritesContextProvider({ children }) {
  const [favouritesMealIds, setFavouritesMealIds] = useState([]);

  function addFavourite(id) {
    setFavouritesMealIds((currentIndex) => [...currentIndex, id]);
  }

  const value = {
    ids: favouritesMealIds,
    addFavourite: addFavourite,
    removeFavourites: removeFavourites,
  };
  function removeFavourites(id) {
    setFavouritesMealIds((currentIndex) =>
      currentIndex.filter((mealIds) => mealIds !== id)
    );
  }

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}
export default FavouritesContextProvider;
