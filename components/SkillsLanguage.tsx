import React from "react";

interface Props {
  skills: string[];
  levels: string[];
}

const SkillsLanguage = ({ skills, levels }: Props) => {
  return (
    <div>
      {skills.map((skill, index) => {
        return (
          <div className="relative mb-[3rem] ">
            <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
              {skill}
            </h1>
            <span
              className={`${levels[index]} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
            ></span>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsLanguage;
