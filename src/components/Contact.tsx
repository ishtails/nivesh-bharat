"use client";
import React from "react";
import Image from "next/image";
import underline from "../../public/assets/underline.svg";
import contact from "../../public/assets/contact.svg";

const Contact = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-semibold text-center text-5xl ">Contact Us</h1>
      <div className="w-full mt-2 flex justify-center">
        <Image src={underline} alt="underline" className="w-[300px]" />
      </div>
      <div className="rounded-xl bg-p_darkgreen max-w-8xl text-white p-4 m-8">
        <div className="px-12 lg:grid grid-cols-2 gap-16">
          <form onSubmit={handleSubmit} className="flex flex-col items-left justify-center">
            <div className="py-2">
              <label htmlFor="name" className="text-[15px]">
                Name
              </label>
              <input id="name" name="name" type="text" className="rounded-sm h-auto text-black border-[#8D8D8D] border-[0.5px] text-[13px] p-2 w-full" />
            </div>
            <div className="py-2">
              <label htmlFor="email" className="text-[15px]">
                Email
              </label>
              <input id="email" name="email" type="text" className="rounded-sm h-auto text-black border-[#8D8D8D] border-[0.5px] text-[13px] p-2 w-full" />
            </div>
            <div className="py-2">
              <label htmlFor="message" className="text-[15px]">
                Message
              </label>
              <textarea id="message" name="message" className="rounded-sm h-24 text-black border-[#8D8D8D] border-[0.5px] text-[13px] p-2 w-full" />
            </div>
            <button type="submit" className="flex items-center py-4 w-[300px]">
              <p className="font-medium px-8 py-4 text-white transition rounded-md cursor-pointer bg-p_green-500 hover:bg-p_green-800">
                Send Message
              </p>
            </button>
          </form>
          <div className="relative">
            <div className="hidden md:block relative rounded-2xl border-[0.5px] text-white py-4 m-2 md:m-8 items-right">
              <Image
                src={contact}
                alt="contact"
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
