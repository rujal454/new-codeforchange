import React from 'react';
import page from "../assets/donate.jpg"; 

function DonatePage() {
  return (
    <div
      name="contact"
      className="w-full h-fullscreen text-red bg-[rgb(247,255,230)]"
     
    >
      <div className="flex flex-col pt-14 max-w-screen-lg mx-auto text-red h-screen text-center md:text-left mb-10">
        <div className="pb-5 md:pt-10 md:mt-7">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500 text-[rgb(71,106,43)]">
           Donate With  Us
          </p>
          <p className="py-4 pb-3 text-[rgb(71,106,43)]"></p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/navvepwa"
            method="POST"
            className="flex flex-col w-full md:w-1/2 md:pt-10 md:mt-15 "
          >
            <input
              type="text"
              name="email"
              placeholder="Name of Medicine"
              className="p-2 bg-transparent border-2 border-[rgb(71,106,43)] rounded-md text-red focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Quantity"
              className="my-4 p-2 bg-transparent border-2 border-[rgb(71,106,43)] rounded-md text-red focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Address"
              rows="10"
              className="p-2 bg-transparent border-2  border-[rgb(71,106,43)] rounded-md text-red focus:outline-none"
            ></textarea>
            <button className="text-red bg-[rgb(71,106,43)] w-1/2 mx-auto mt-8">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonatePage;
