import { Link, useLocation } from "react-router-dom";
import BaseLayout from "../../layouts/Base/BaseLayout.jsx";
import ApiManager from "../../api/ApiManager.js";
import { useEffect, useState } from "react";

export default function Results() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const api = new ApiManager();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    let queryParams = `search?q=${query}`;

    const fetchSongs = async () => {
      try {
        const res = await api.get(queryParams);
        const fetchedSongs = res.data.data.map((song) => song);
        setSongs(fetchedSongs);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <>
      <BaseLayout>
        <div className="container px-5 mx-auto">
          <h2 className="text-6xl font-bold text-deezer-white tracking-tight my-16">
            Results for "{query}"
          </h2>
          <ul>
            {songs.map((song, index) => (
              <li className="flex flex-row justify-between items-center my-5 z-0">
                <div className="flex flex-row justify-start items-center gap-3">
                  <img src={song.album.cover_small} alt="" className="h-full w-auto object-cover" />
                  <span className="text-deezer-primary w-fit text-nowrap truncate">
                    {song.title}
                  </span>
                  <Link to={`/album?id=${song.album.id}`} className="text-deezer-white w-fit text-nowrap truncate">
                    {song.album.title}
                  </Link>
                </div>
                <audio src={song.preview} className="block" controls></audio>
              </li>
            ))}
          </ul>
        </div>
      </BaseLayout>
    </>
  );
}
