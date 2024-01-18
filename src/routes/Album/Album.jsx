import { useLocation } from "react-router-dom";
import BaseLayout from "../../layouts/Base/BaseLayout.jsx";
import Track from "../../components/Track/Track.jsx";
import ApiManager from "../../api/ApiManager.js";
import { useContext, useEffect, useState } from "react";
import style from "./Album.module.scss";
import FavouriteContext from "../../store/FavouriteContext.jsx";

export default function Album() {
  const location = useLocation();
  const albumId = new URLSearchParams(location.search).get("id");
  const api = new ApiManager();
  const [album, setAlbum] = useState([]);
  const favouritesCtx = useContext(FavouriteContext);

  useEffect(() => {
    let queryParams = `album/${albumId}`;

    const fetchAlbum = async () => {
      try {
        const res = await api.get(queryParams);
        const fetchedAlbum = res.data;
        setAlbum(fetchedAlbum);
      } catch (error) {
        console.error("Error fetching album:", error);
      }
    };

    fetchAlbum();
  }, []);

  return (
    <>
      <BaseLayout>
        <div
          style={{ backgroundImage: `url(${album?.cover_xl})` }}
          className={`w-full h-[60vh] bg-deezer-black flex flex-col justify-end items-start bg-cover relative`}
        >
          <h2 className="container px-5 text-6xl font-bold text-deezer-white tracking-tight mx-auto z-40 mb-10">
            {album?.title}
            {favouritesCtx.favourites.length}
          </h2>
          <div className="container px-5 text-6xl font-bold text-deezer-gray tracking-tight mx-auto z-40 mb-10">
            {album?.contributors?.map((c, index) => {})}
          </div>
          <div className={style.custom_grandient}></div>
        </div>
        <div className="container px-5 mx-auto">
          <ul>
            {album?.tracks?.data?.map((track, index) => (
              <Track index={index} track={track}/>
            ))}
          </ul>
        </div>
      </BaseLayout>
    </>
  );
}
