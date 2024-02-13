import React from "react";
import {
  CodeBracketSquareIcon,
  RocketLaunchIcon,
  CommandLineIcon,
} from "@heroicons/react/20/solid";

const Services = () => {
  return (
    <div
      id="services"
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] "
    >
      <p className="heading">
        MY <span className="text-yellow-400"> expertise</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="fade-right">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] " />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h1>
            <p className="text-[12px] text-[#d3d2d2] font-normal">
              I specialize in frontend development using React with TypeScript.
              With expertise in crafting dynamic user interfaces, I ensure every
              project is built on a foundation of robust code and seamless
              functionality. Whether it's leveraging CSS frameworks like
              Tailwind CSS or implementing custom styles with CSS-in-JS
              solutions, I strive to deliver visually stunning and highly
              responsive web applications that exceed client expectations.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] " />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h1>
            <p className="text-[12px] text-[#d3d2d2] font-normal">
              I specialize in backend development using Node.js, Express.js, and
              a range of cloud technologies like AWS and MongoDB Atlas. With
              expertise in SQL databases, I ensure efficient data management for
              your applications. From building RESTful APIs to implementing
              secure authentication, I deliver robust backend solutions tailored
              to your needs. Let me streamline your backend infrastructure for
              optimal performance and scalability.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="600">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] " />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Fullstack
            </h1>
            <p className="text-[12px] text-[#d3d2d2] font-normal">
              I specialize in full-stack development, seamlessly integrating
              frontend and backend technologies. Using React with TypeScript for
              the frontend and Node.js, Express.js, AWS, and MongoDB Atlas for
              the backend, I deliver cohesive and powerful web applications.
              From captivating user interfaces to robust APIs and database
              systems, I ensure end-to-end development excellence, bringing your
              vision to life with efficiency and precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
