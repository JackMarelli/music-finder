import { useContext } from "react";
import FavouriteContext from "../../store/FavouriteContext.jsx";

export default function Track({ props }) {
  const favouritesCtx = useContext(FavouriteContext);

  return (
    <div className="flex flex-row justify-between items-center my-5 z-0">
      <div className="flex flex-row justify-start items-center gap-3">
        <span
          key={props.index}
          className="text-deezer-white w-fit text-nowrap truncate"
        >
          {props.track.title}
        </span>
      </div>
      <div className="flex flex-row justify-end items-center gap-3">
        <div
          className="like"
          onClick={() => {
            favouritesCtx.toggleFavourite(props.track);
          }}
        >
          <img
            src={
              favouritesCtx.isFavourite(props.track)
                ? "./assets/icons/svg/heart_filled.svg"
                : "./assets/icons/svg/heart_empty.svg"
            }
            alt=""
            className="cursor-pointer"
          />
        </div>
        <audio src={props.track.preview} className="block" controls></audio>
      </div>
    </div>
  );
}
