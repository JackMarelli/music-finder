import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./BaseLayout.module.scss";

function BaseLayout({ children }) {
  console.log(window.location.pathname);
  return (
    <>
      <div className="h-fit">
        <Navbar></Navbar>
        <div className="w-full min-h-screen">{children}</div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default BaseLayout;
