import React from 'react';
import frontend from "../assets/front.png";
import backend from "../assets/backend.png";
import responsive from "../assets/responsive.png"
const Services = () => {
  const services = [
    {
      id: 1,
      image: frontend,
      name: "Frontend Development",
      details: "Develop modern looking UI using HTML, CSS, JavaScript and ReactJs"
    },
    {
      id: 2,
      image: backend,
      name: "Backend Development",
      details: "Backend REST API development using ExpressJs, MongoDb (JavaScript),"
    },
    {
      id: 3,
      image: responsive,
      name: "Responsive Design",
      details: "Wesbites I make will look good in Mobile, Tablet and Desktop devices."
    }
  ]
  return (
    <div
      name="services"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="my-10 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Services
          </p>
          <p className="py-6">What I Do ?</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
          {
            services.map((service) =>
              <div className='shadow-md shadow-gray-600 rounded-lg p-5 space-y-4 my-2'>
                <img className='w-[60px]' src={service?.image} alt="" />
                <h1 className='text-2xl font-semibold'>{service?.name}</h1>
                <p>{service?.details}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Services;