import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favourites: [],
  addFavourite: (favourite) => {},
  removeFavourite: (favourite) => {},
  toggleFavourite: (favourite) => {},
  isFavourite: (favourite) => {},
});

export function FavouriteContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  const isFavourite = (favourite) => {
    return userFavourites.indexOf(favourite) !== -1;
  };

  const addFavouriteHandler = (favourite) => {
    setUserFavourites((prevUserFavourites) => {
      console.log(prevUserFavourites);
      return prevUserFavourites.concat(favourite);
    });
  };

  const removeFavouriteHandler = (favourite) => {
    let index = userFavourites.indexOf(favourite);

    setUserFavourites((prevUserFavourites) => {
      if (isFavourite(favourite)) {
        const updatedFavourites = [...prevUserFavourites];
        updatedFavourites.splice(index, 1);
        return updatedFavourites;
      } else {
        return prevUserFavourites;
      }
    });
  };

  const toggleFavouriteHandler = (favourite) => {
    if (isFavourite(favourite)) {
      removeFavouriteHandler(favourite);
    } else {
      addFavouriteHandler(favourite);
    }
  };

  const context = {
    favourites: userFavourites,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    toggleFavourite: toggleFavouriteHandler,
    isFavourite: isFavourite,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
