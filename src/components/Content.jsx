import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import pt from "../assets/PT.png";
import ml from "../assets/ML.png";
import wd from "../assets/WD.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Content() {
  return (
    <>
      <div className="w-full bg-white mt-0 m-0">
        <h1 className="text-5xl text-center my-16 text-green-800 font-normal font-montserrat">
          Our <strong className="font-bold">Service</strong>
        </h1>
        <div className="w-4/5 grid grid-cols-3 gap-16 content-center mx-auto mb-10">
          <div className="p-6 shadow-2xl">
            <img src={pt} alt="" className="w-full" />
            <h3 className="font-bold mt-6 mb-3 text-2xl font-poppins">
              Programming Tasks
            </h3>
            <p className="text-[#00000080] text-lg text-justify h-36 font-montserrat">
              Programming algorithms, creating databases, all high school to
              college level programming assignments etc.
            </p>
            <div className="flex flex-col items-center mt-28">
              <a
                href=""
                className={
                  "py-2.5 px-5 font-montserrat bg-gradient-to-r from-green-800 to-green-950 text-center font-bold text-lg 2xl:text-2xl rounded-3xl leading-normal text-white"
                }>
                Learn More
                <span className={"text-2xl align-middle ml-3"}>
                  <FontAwesomeIcon icon={faCircleChevronRight} />
                </span>
              </a>
            </div>
          </div>
          <div className="p-6 shadow-2xl">
            <img src={wd} alt="" className="w-full" />
            <h3 className="font-bold mt-6 mb-3 text-2xl font-poppins">
              Website Development
            </h3>
            <p className="text-[#00000080] text-lg text-justify h-36 font-montserrat">
              We serve the creation of UI UX Research and Design, Company
              Landing Pages Websites, CRUD Websites etc.
            </p>
            <div className="flex flex-col items-center mt-28">
              <a
                href=""
                className={
                  "py-2.5 px-5 font-montserrat bg-gradient-to-r from-green-800 to-green-950 text-center font-bold text-lg 2xl:text-2xl rounded-3xl leading-normal text-white"
                }>
                Learn More
                <span className={"text-2xl align-middle ml-3"}>
                  <FontAwesomeIcon icon={faCircleChevronRight} />
                </span>
              </a>
            </div>
          </div>
          <div className="p-6 shadow-2xl">
            <div>
              <img src={ml} alt="" className="w-full" />
              <h3 className="font-bold mt-6 mb-3 text-2xl font-poppins">
                Machine Learning & Deep Learning
              </h3>
              <p className="text-[#00000080] text-lg text-justify h-36 font-montserrat">
                Modeling Classification, Clustering, SPK, Forescasting,
                Predictions etc.
              </p>
            </div>
            <div className="flex flex-col items-center mt-20">
              <a
                href=""
                className={
                  "py-2.5 px-5 font-montserrat bg-gradient-to-r from-green-800 to-green-950 text-center font-bold text-lg 2xl:text-2xl rounded-3xl leading-normal text-white"
                }>
                Learn More
                <span className={"text-2xl align-middle ml-3"}>
                  <FontAwesomeIcon icon={faCircleChevronRight} />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="my-96 w-11/12 h-52 mx-auto bg-green-800 flex justify-around">
          <div className="bg-white h-full w-8/12 ml-36 py-9 px-20 font-poppins">
            <h1 className="2xl:text-7xl text-5xl font-extrabold mb-7">
              Have Questions?
            </h1>
            <h3 className="inline-block align-baseline 2xl:text-5xl text-3xl text-green-800">
              Do You Need Any Other Assistance?
            </h3>
          </div>
          <div className="text-green-800 font-bold mx-auto my-auto">
            <a
              href=""
              className={
                "p-4 font-montserrat shadow-green-950 shadow-md bg-white w-50 h-14 rounded-3xl border-1 border-white flex justify-around"
              }>
              <span className={"text-4xl mt-[-8px] mr-4"}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <span className={"text-2xl mt-[-4px]"}>Whatsapp</span>
            </a>
          </div>
        </div>

        <div className="text-center my-16">
          <h1 className="2xl:text-3xl text-2xl font-semibold font-poppins">
            &copy; SKIP NGODING 2023
          </h1>
        </div>
      </div>
    </>
  );
}

export default Content;
