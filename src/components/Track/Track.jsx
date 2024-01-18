import { useContext } from "react";
import FavouriteContext from "../../store/FavouriteContext.jsx";
import { Link } from "react-router-dom";
import styles from "./Track.module.scss"

export default function Track(props) {
  const favouritesCtx = useContext(FavouriteContext);

  return (
    <div className="flex flex-row justify-between items-center my-5 z-0">
      <div className="flex flex-row justify-start items-center gap-3">
        {props?.showCover ? <img src={props?.track?.album?.cover_small} alt="" className="h-full w-auto object-cover mr-3" /> : ""} 
        <span
          className="text-deezer-white w-fit text-nowrap truncate"
        >
          {props?.track.title}
        </span>
        <span className="text-deezer-primary w-fit text-nowrap truncate">
          {props?.showAlbum ? <Link to={`/album?id=${props?.track?.album?.id}`} className="text-deezer-gray-light w-fit text-nowrap truncate">{props.track.album.title}
          </Link> : ""}
        </span>
      </div>
      <div className="flex flex-row justify-end items-center gap-3">
        <div
          className="like"
          onClick={() => {
            favouritesCtx.toggleFavourite(props?.track);
          }}
        >
          <img
            src={
              favouritesCtx.isFavourite(props?.track)
                ? "./assets/icons/svg/heart_filled.svg"
                : "./assets/icons/svg/heart_empty.svg"
            }
            alt=""
            className="cursor-pointer mr-3"
          />
        </div>
        <audio src={props?.track.preview} className="block" controls controlsList="nodownload noplaybackrate"></audio>
      </div>
    </div>
  );
}
