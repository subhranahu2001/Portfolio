import bannerImage from "../assets/profile.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Developer","Backend Developer", "Frontend Developer","Fullstack Developer" ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
      
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-white mt-10 mb-10">
        {/* text */}
        <div className="w-2/3 space-y-2  ms-10">
          <h3 className="text-2xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Subhranshu Barik</h1>
          <h2 className="text-3xl ">
            I am <span className="font-bold underline text-yellow-300" ref={el}></span>
          </h2>
          <p className="">
          I am an enthusiastic and motivated recent graduate with a strong foundation in Java development and a passion for software engineering. Having completed my MCA, I have gained hands-on experience in Java through coursework, personal projects, and internships.
          </p>

          <div className="icons-container flex space-x-5">
            <a href="https://www.linkedin.com/in/subhranshubarik/" target="_blank" className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-12 h-12  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-2xl  fa-linkedin-in"></i>
            </a>

            <a className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-2xl  fa-instagram"></i>
            </a>

            <a href="https://github.com/subhranahu2001" target="_blank" className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-3 w-12 h-12  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-2xl  fa-github"></i>
            </a>

            <a href="mailto:silusubhranshu@gmail.com" target="_blank"className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-12 h-12  rounded-full flex justify-center items-center bg-gray-800">
            <i class="fa-solid text-2xl fa-envelope"></i>
            </a>
          </div>
          <br />
          <a
            className=" text-2xl     px-3  py-2 bg-orange-500  rounded-full shadow-lg"
            href="mailto:silusubhranshu@gmail.com"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* second  dabba */}

      <div className=" w-full flex justify-center">
        {/* image */}
        <img className="rounded-full my-6 shadow-lg w-fit" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;