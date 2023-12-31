"use client";
import React, { useRef } from "react";
import Image from "next/image";
import underline from "../../public/assets/underline.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { team } from "@/data/db";
import Navigate from "./Navigate";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  const teamRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-semibold text-center text-5xl ">Our Team</h1>
      <div className="w-full mt-2 flex justify-center">
        <Image src={underline} alt="underline" className="w-[300px]" />
      </div>

      <div className="max-w-[95vw] max-h-[75vh] flex overflow-x-scroll space-x-10 scrollbar-hide bg-pale-green/10 mb-5 scroll-smooth rounded-xl p-5 snap-x snap-mandatory mt-10 sm:p-10" ref={teamRef}>
        {team.map((member) => (
          <TeamCard 
          key={member.id} 
          name={member.name} 
          designation={member.designation} 
          imageURL={member.image} />
        ))}
      </div>

      <Navigate scrollRef={teamRef} scrollBy={200} />
    </div>
  );
};

export default OurTeam;
