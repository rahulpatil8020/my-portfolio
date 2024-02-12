import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] ">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem title="React Developer" year="2014 - 2018" />
          <SkillsItem title="MERN Stack Developer" year="2014 - 2018" />
          <SkillsLanguage
            skills={["html", "css", "javascript"]}
            levels={["w-[91%]", "w-[88%]", "w-[80%]"]}
          />
        </div>
        <div>
          <SkillsItem title="Next js Developer" year="2018 - 2020" />
          <SkillsItem title="Node js Developer" year="2020 - 2022" />
          <SkillsLanguage
            skills={["React Js", "Next Js", "TypeScript"]}
            levels={["w-[81%]", "w-[78%]", "w-[60%]"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
