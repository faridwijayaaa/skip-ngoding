import logo from "../assets/logo-sk.png";
import bg from "../assets/bg.png";
import logo2 from "../assets/Group1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div
        className={"w-full h-screen bg-cover mt-0 m-0 font-montserrat"}
        style={{ backgroundImage: `url(${bg})` }}>
        {/* <div className={"w-full h-screen flex flex-col"}> */}
        <div className={"w-full h-screen bg-[#00000080]"}>
          <div className={"w-4/5 h-28 mx-auto flex justify-between"}>
            <img
              src={logo}
              alt=""
              className={"object-contain h-4/6 align-center my-auto"}
            />

            <div
              className={
                "grid grid-cols-2 gap-x-14 content-center font-bold text-green-800"
              }>
              <a
                href=""
                className={
                  "p-2.5 bg-white w-44 h-12 rounded-2xl border-1 border-white flex justify-around"
                }>
                <span className={"text-3xl mt-[-5px]"}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>
                <span className={"text-xl"}>Whatsapp</span>
              </a>
              <a
                href=""
                className={
                  "p-2.5 bg-white w-44 h-12 text-center text-xl rounded-2xl border-1 border-white leading-normal"
                }>
                Join Us!
              </a>
            </div>
          </div>

          <div className={"text-white mt-24 2xl:mt-48 w-4/5 mx-auto "}>
            <img src={logo2} alt="" className={"mb-12 w-36"} />
            <h1 className={"text-5xl font-extrabold w-2/4 max-w-lg mb-10"}>
              We are fully commited to the tasks we take on!
            </h1>
            <a
              href=""
              className={
                "py-2.5 px-5 bg-black text-center text-lg rounded-3xl border-black leading-normal"
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
