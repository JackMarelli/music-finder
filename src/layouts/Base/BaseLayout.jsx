import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function BaseLayout({ children }) {
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
