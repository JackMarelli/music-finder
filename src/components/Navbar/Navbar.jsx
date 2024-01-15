import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={window.scrollY !== 0 && "scroll_zero"}>
      <div className="nav__left">
        <div className="font-xxl font-bold">Music Finder</div>
        <Link to="/">Home</Link>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">New & Popular</a>
        <a href="#">Browse by Languages</a>
      </div>
    </nav>
  );
}

export default Navbar;
