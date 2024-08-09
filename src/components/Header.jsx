import { useState } from "react";
const Header = () => {
    const[brandName,setBrandName] = useState("Subhranshu Barik");

    const [menuLinks,setMenuLinks]=useState([
        {
            title:"Home",
            link:"Home.jsx",
            id:1
        },
        {
            title:"About",
            link:"./About.jsx",
            id:2
        },
        {
            title:"Skills",
            link:"",
            id:3
        },
        {
            title:"Portfolio",
            link:"/portfolio",
            id:4
        },
        {
            title:"Contact",
            link:"/contact",
            id:4
        }
    ]);

    const[actionButton,setActionButton] = useState({
        title:"Download CV",
        link:"subhranshu.pdf"
    });

  return (
    <>
      <div className=" h-20 main flex justify-between items-center px-10 bg-gray-100">
        <div>
          {/* brand logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>
        <div className="space-x-10">
          {/* menu link */}
         {menuLinks.map((link) => (
                <a href={link.link} className="hover:text-orange-700">
                {link.title}
              </a>
            ) )}
          {/* <a href="/about" className="hover:text-orange-700">
            About
          </a>
          <a href="/skill" className="hover:text-orange-700">
            Skills
          </a>
          <a href="/portfolio" className="hover:text-orange-700">
            Portfolio
          </a>
          <a href="/contact" className="hover:text-orange-700">
            Contact
          </a> */}
        </div>
        <div>
          {/* buttons */}
          <a href={actionButton.link}  download={"resume.pdf"}   ><button className="px-4 py-2 font-bold rounded-lg bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
            {actionButton.title}
          </button></a>
        </div>
      </div>
    </>
  );
};

export default Header;
