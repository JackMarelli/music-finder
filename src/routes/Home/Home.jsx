import BaseLayout from "../../layouts/Base/BaseLayout.jsx";
import styles from "./Home.module.scss";

function Home() {
  return (
    <>
      <BaseLayout>
        <div className="container px-5 mx-auto">
          <div className="h-screen w-full mx-auto flex flex-col justify-center items-center">
            <h1 className="uppercase text-7xl lg:text-9xl tracking-wide font-bold text-deezer-white font-league mx-5 my-8">
              Search the music
            </h1>
            <div className="p-5 m-5 w-full md:w-6/12 max-w-[600px] h-fit flex flex-col mb-10 bg-deezer-white rounded">
              <h2 class="text-center font-inter font-bold text-deezer-gray">
                Search a track among Deezer databases
              </h2>
              <input
                type="text"
                id="default-input"
                className="bg-deezer-white border border-deezer-black placeholder-gray-500 text-deezer-black text-center text-md rounded-lg w-full p-2.5 mt-3" placeholder="Search..."
              />
              <a href="#" className="bg-deezer-primary text-deezer-white text-md text-center font-bold rounded-lg w-full p-2.5 mt-3">Submit</a>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
}

export default Home;
