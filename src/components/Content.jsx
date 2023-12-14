import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import pt from "../assets/PT.png";
import ml from "../assets/ML.png";
import wd from "../assets/WD.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Content() {
  const linkWhatsapp =
    "https://api.whatsapp.com/send/?phone=6285855101750&text&type=phone_number&app_absent=0";

  const contents = [
    {
      title: "Programming Tasks",
      description:
        "Programming algorithms, creating databases, all high school to college level programming assignments etc.",
      image: pt,
    },
    {
      title: "Website Development",
      description:
        "We serve the creation of UI UX Research and Design, Company Landing Pages Websites, CRUD Websites etc.",
      image: wd,
    },
    {
      title: "Machine Learning & Deep Learning",
      description:
        "Modeling Classification, Clustering, SPK, Forescasting, Predictions etc.",
      image: ml,
    },
  ];

  const Content = contents.map((content) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <div className="p-6 shadow-2xl max-sm:mb-10">
        <img src={content.image} alt="" className="w-full" />
        <div className="h-40">
          <h3 className="font-bold mt-6 mb-3 sm:text-2xl max-sm:text-lg font-poppins">
            {content.title}
          </h3>
          <p className="text-[#00000080] sm:text-lg max-sm:text-sm text-justify font-montserrat">
            {content.description}
          </p>
        </div>
        <div className="flex flex-col items-center sm:mt-28 max-sm:mt-4">
          <a
            href=""
            className={
              "sm:py-2.5 sm:px-5 max-sm:py-1 max-sm:px-5 font-montserrat bg-gradient-to-r from-green-800 to-green-950 text-center font-bold sm:text-lg 2xl:text-2xl max-sm:text-xs rounded-3xl leading-normal text-white"
            }>
            Learn More
            <span className={"text-2xl align-middle ml-3"}>
              <FontAwesomeIcon icon={faCircleChevronRight} />
            </span>
          </a>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="w-full bg-white mt-0 m-0" id="content">
        <h1 className="sm:text-5xl text-center sm:my-16 max-sm:text-3xl max-sm:my-10 text-green-800 font-normal font-montserrat">
          Our <strong className="font-bold">Service</strong>
        </h1>
        <div className="w-4/5 sm:grid sm:grid-cols-3 sm:gap-16 content-center mx-auto sm:mb-10">
          {Content}
        </div>

        <div className="sm:my-80 sm:w-11/12 sm:h-52 mx-auto bg-green-800 flex sm:justify-around max-sm:w-full max-sm:h-[45rem] max-sm:flex-col max-sm:align-middle">
          <div className="bg-white sm:h-full sm:w-8/12 sm:ml-36 sm:py-9 sm:px-20 max-sm:mt-64 max-sm:my-auto max-sm:py-10 font-poppins">
            <h1 className="2xl:text-7xl lg:text-5xl sm:text-4xl max-sm:text-3xl font-extrabold mb-7 max-sm:text-center max-sm:w-1/2 max-sm:mx-auto">
              Have Questions?
            </h1>
            <h3 className="sm:inline-block sm:align-baseline 2xl:text-5xl lg:text-3xl sm:text-2xl max-sm:text-xl text-green-800 max-sm:text-center max-sm:w-1/2 max-sm:mx-auto">
              Do You Need Any Other Assistance?
            </h3>
          </div>
          <div className="text-green-800 font-bold mx-auto my-auto max-sm:mb-24 animate-bounce">
            <a
              href={linkWhatsapp}
              className={
                "sm:p-4 max-sm:p-2 font-montserrat shadow-green-950 shadow-md bg-white w-50 sm:h-14 max-sm:h-10 max-sm:w-36 rounded-3xl border-1 border-white flex justify-around"
              }>
              <span
                className={
                  "sm:text-4xl sm:mt-[-8px] sm:mr-4 max-sm:mr-2 max-sm:mt-[-4px] max-sm:text-2xl"
                }>
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              <span className={"sm:text-2xl sm:mt-[-4px] max-sm:text-base"}>
                Whatsapp
              </span>
            </a>
          </div>
        </div>

        <div className="text-center sm:my-16 max-sm:mt-20 max-sm:mb-6">
          <h1 className="2xl:text-3xl sm:text-2xl max-sm:text-sm font-semibold font-poppins">
            &copy; SKIP NGODING 2023
          </h1>
        </div>
      </div>
    </>
  );
}

export default Content;
