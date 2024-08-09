import { useState } from "react";
import bannerImage from "../assets/profile.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Software Developer ",
    desc1: `During my studies, I developed a solid understanding of core Java concepts, including object-oriented programming, data structures, and algorithms. I have practical experience with Java frameworks and tools such as Spring and Maven, and I am adept at building and debugging applications.`,
    desc2: ` My strong work ethic, attention to detail, and ability to quickly learn new technologies make me a valuable addition to any development team. I am enthusiastic about starting my career as a Java developer and am ready to tackle new challenges and contribute to innovative projects.
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="rounded-full my-6 shadow-2xl w-fit shadow-blue-400"
              src={data.image}
              alt="Subhranshu"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;