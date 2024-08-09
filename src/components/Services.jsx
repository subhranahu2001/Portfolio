import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Projects
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
          <i class="text-5xl fa-plate-utensils"></i>
            <h1 className="text-4xl">Food Ordring Web App</h1>
            <p>
            An online food delivery application using Spring Boot tech stack is a web-based application 
that allows users to order food from local restaurants and have it delivered to their location. 
 We will develop an API using Spring Boot that will consume the API using react.js. 
 For the payment received we will use the Strip Payment API for payment Integration..
            </p>
            <a href="https://github.com/subhranahu2001/Online-Food-Ordering-Project" target="_blank"><button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button></a>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
          <i class="fa-solid fa-plate-utensils"></i>
            <h1 className="text-4xl">E-Commerce Web App</h1>
            <p>
            Developed a Spring Boot and React.Js application and used Razorpay payment integration. 
 We will develop an API using Spring Boot and a client application that will consume the API 
using react.js. 
The user will add/remove products from a product list to/from a shopping cart and place an 
order.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          {/* <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Services;