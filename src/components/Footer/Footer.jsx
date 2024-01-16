import styles from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <div className="bg-deezer-black">
        <div className="container px-5 mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-y-3 my-16 w-40">
            <h3 className="text-deezer-secondary text-md font-bold">Deezer</h3>
            <a href="#" className="text-deezer-white text-md">
              Plans
            </a>
            <a href="#" className="text-deezer-white text-md">
              Reviews
            </a>
            <a href="#" className="text-deezer-white text-md">
              Devices
            </a>
            <a href="#" className="text-deezer-white text-md">
              Desktop app
            </a>
            <a href="#" className="text-deezer-white text-md">
              Help
            </a>
            <a href="#" className="text-deezer-white text-md">
              Community
            </a>
            <a href="#" className="text-deezer-white text-md">
              Backstage
            </a>
          </div>
          <div className="flex flex-col gap-y-3 my-16 w-48">
            <h3 className="text-deezer-secondary text-md font-bold">
              Features
            </h3>
            <a href="#" className="text-deezer-white text-md">
              Flow
            </a>
            <a href="#" className="text-deezer-white text-md">
              Identify songs
            </a>
            <a href="#" className="text-deezer-white text-md">
              Transfer your library
            </a>
            <a href="#" className="text-deezer-white text-md">
              Lyrics
            </a>
            <a href="#" className="text-deezer-white text-md">
              Offline listening
            </a>
            <a href="#" className="text-deezer-white text-md">
              High Fidelity (HiFi)
            </a>
          </div>
          <div className="flex flex-col gap-y-3 my-16 w-48">
            <h3 className="text-deezer-secondary text-md font-bold">Explore</h3>
            <a href="#" className="text-deezer-white text-md">
              Charts
            </a>
            <a href="#" className="text-deezer-white text-md">
              Most popular release
            </a>
            <a href="#" className="text-deezer-white text-md">
              New releases
            </a>
            <a href="#" className="text-deezer-white text-md">
              Radio
            </a>
            <a href="#" className="text-deezer-white text-md">
              Podcasts
            </a>
            <a href="#" className="text-deezer-white text-md">
              Music for all moments
            </a>
            <a href="#" className="text-deezer-white text-md">
              Zen by Deezer
            </a>
            <a href="#" className="text-deezer-white text-md">
              Newsroom
            </a>
          </div>
          <div className="flex flex-col gap-y-3 my-16 w-48">
            <h3 className="text-deezer-secondary text-md font-bold">
              Who are we?
            </h3>
            <a href="#" className="text-deezer-white text-md">
              Investors
            </a>
            <a href="#" className="text-deezer-white text-md">
              Brand partnerships
            </a>
            <a href="#" className="text-deezer-white text-md">
              Musitians and podcasters
            </a>
            <a href="#" className="text-deezer-white text-md">
              Developers
            </a>
            <a href="#" className="text-deezer-white text-md">
              Press
            </a>
            <a href="#" className="text-deezer-white text-md">
              Careers
            </a>
          </div>
          <div className="flex flex-col gap-y-3 my-16 w-48">
            <h3 className="text-deezer-secondary text-md font-bold">Legal</h3>
            <a href="#" className="text-deezer-white text-md">
              Terms and conditions of use{" "}
            </a>
            <a href="#" className="text-deezer-white text-md">
              Privacy policy
            </a>
            <a href="#" className="text-deezer-white text-md">
              Cookies
            </a>
            <a href="#" className="text-deezer-white text-md">
              Open Source Software Report
            </a>
            <a href="#" className="text-deezer-white text-md">
              Vulnerabilities Disclosure Privacy
            </a>
            <a href="#" className="text-deezer-white text-md">
              Digital Services Act
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
