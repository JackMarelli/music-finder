import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-deezer-black w-full h-fit py-5 border-b border-b-deezer-white z-50">
      <div className="container px-5 mx-auto flex justify-between items-center h-fit">
        <Link to="/" className="text-3xl uppercase text-deezer-white font-league">
          Music Finder
        </Link>
        <div>
          <a
            href="#"
            className="bg-deezer-primary text-deezer-white text-sm py-2.5 px-5 font-bold rounded rounded-xl"
          >
            Menu
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
