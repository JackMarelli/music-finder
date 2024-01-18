import { Link, useLocation } from "react-router-dom";
import BaseLayout from "../../layouts/Base/BaseLayout.jsx";
import ApiManager from "../../api/ApiManager.js";
import { useEffect, useState } from "react";
import Track from "../../components/Track/Track.jsx";

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
          <ul className="mt-16">
            {songs.map((track, index) => (
              <Track key={index} track={track} showAlbum={true} showCover={true}/>
            ))}
          </ul>
        </div>
      </BaseLayout>
    </>
  );
}
