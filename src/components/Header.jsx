import logo from "../assets/logo-sk.png";
import logo2 from "../assets/Group1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

// Initialization for ES Users
import { SmoothScroll, initTE } from "tw-elements";

initTE({ SmoothScroll });

function Header() {
  const linkWhatsapp =
    "https://api.whatsapp.com/send/?phone=6285855101750&text&type=phone_number&app_absent=0";

  return (
    <>
      <div
        className={
          "w-full sm:h-screen sm:bg-cover mt-0 m-0 font-montserrat bg-heroBg max-sm:bg-heroBgMoblie"
        }>
        {/* <div className={"w-full h-screen flex flex-col"}> */}
        <div className={"w-full sm:h-screen bg-[#00000080] max-sm:h-[74vh]"}>
          <div
            className={
              "sm:w-4/5 sm:h-28 mx-auto flex justify-between max-sm:h-32 max-sm:w-11/12"
            }>
            <img
              src={logo}
              alt="Skip Ngoding Logo"
              className={
                "object-contain sm:h-4/6 align-center my-auto max-sm:h-2/5"
              }
            />

            <div
              className={
                "grid grid-cols-2 sm:gap-x-14 max-sm:gap-x-2 content-center font-bold text-green-800"
              }>
              <a
                href={linkWhatsapp}
                className={
                  "sm:p-2.5 bg-white sm:w-44 sm:h-12 rounded-2xl flex justify-around max-sm:h-8 max-sm:w-28"
                }>
                <span
                  className={
                    "sm:text-3xl sm:mt-[-5px] max-sm:text-base max-sm:mt-[3px]"
                  }>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>
                <span
                  className={
                    "sm:text-xl max-sm:text-sm max-sm:ml-[-15px] max-sm:mt-[5px]"
                  }>
                  Whatsapp
                </span>
              </a>
              <a
                href=""
                className={
                  "sm:p-2.5 bg-white sm:w-44 sm:h-12 text-center sm:text-xl rounded-2xl border-1 border-white max-sm:align-middle max-sm:h-8 max-sm:w-28 max-sm:text-sm max-sm:flex max-sm:items-center max-sm:justify-center"
                }>
                Join Us!
              </a>
            </div>
          </div>

          <div
            className={
              "text-white sm:mt-24 2xl:mt-48 max-sm:mt-14 sm:w-4/5 max-sm:w-11/12 mx-auto "
            }>
            <img
              src={logo2}
              alt=""
              className={"sm:mb-12 sm:w-36 max-sm:w-36 max-sm:mb-4"}
            />
            <h1
              className={
                "sm:text-5xl font-extrabold sm:w-2/4 max-w-lg mb-10 max-sm:text-[2.10rem] leading-snug max-sm:w-11/12"
              }>
              We are fully commited to the tasks we take on!
            </h1>
            <a
              href="#content"
              className={
                "py-2.5 px-5 bg-black text-center text-lg rounded-3xl border-black leading-normal scroll-smooth"
              }>
              Discover More
              <span className={"text-2xl align-middle ml-3"}>
                <FontAwesomeIcon icon={faCircleChevronDown} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
