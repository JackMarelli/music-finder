import { createContext, useEffect, useState } from "react";

const FavouriteContext = createContext({
  favourites: [],
  addFavourite: (favourite) => { },
  removeFavourite: (favourite) => { },
  toggleFavourite: (favourite) => { },
  isFavourite: (favourite) => { },
});

export function FavouriteContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState(localStorage.favourites ? JSON.parse(localStorage.favourites) : []);

  const isFavourite = (favourite) => {
    return userFavourites.indexOf(favourite) !== -1;
  };

  const addFavouriteHandler = (favourite) => {
    setUserFavourites((prevUserFavourites) => {
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
    //localStorage.favourites = JSON.stringify(userFavourites);
    console.log(userFavourites);
  };

  useEffect(() => {
    localStorage.favourites = JSON.stringify(userFavourites);
  }, [userFavourites]);

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
