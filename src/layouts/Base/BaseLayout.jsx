import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./BaseLayout.module.scss";

function BaseLayout({ children }) {
  console.log(window.location.pathname);
  return (
    <>
      <div className="h-fit bg-deezer-black">
        <Navbar></Navbar>
        <div className="w-full min-h-96 h-fit">{children}</div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default BaseLayout;
