import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
interface Props {
  image: string;
  name: string;
  role: string;
}

const ClientReview = ({ image, name, role }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        objectFit="contain"
        className="mx-auto mb-[2rem] rounded-full"
      />
      <div className="flex items-center mx-auto">
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
      </div>
      <h1 className="text-[25px] mt-[1rem] text-white">{name}</h1>
      <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem] ">
        {role}
      </p>
      <p className="text-[15px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, corporis
        odit ea suscipit dolores nihil quod tempora modi repudiandae, culpa
        consectetur quasi aspernatur, totam dolor amet! Nostrum laboriosam
        eveniet doloremque!
      </p>
    </div>
  );
};

export default ClientReview;
