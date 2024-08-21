import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import TextBar from "./TextBar";

import "./utils/contact.css";
import { useState } from "react";

export default function Contact() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "udK01",
    message: message,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        alert(`Email Sent!`);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error(`Failed to send message:`, error);
      });
  };

  const inputStyle =
    "w-[80%] bg-transparent caret-primary_green focus:outline-none text-white font-poppins font-extralight lg:text-[30px] md:text-[24px] 2xs:text-[16px] pl-3 border-l-2 border-b-2 border-primary_purple";

  return (
    <section id="CONTACT" className="flex flex-col justify-center">
      <div className="md:space-y-[90px] 2xs:space-y-[60px] z-20">
        {/* Title */}
        <div className="w-full h-full flex justify-center scroll_animate">
          <TextBar text={"CONTACT"} shadow={"top_left_green"} extra={"z-20"} />
        </div>

        {/* Form */}
        <form
          ref={form}
          className="flex justify-center z-20"
          onSubmit={(e) => sendEmail(e)}
        >
          <div
            className="flex flex-col items-center justify-center md:w-[50vh] 2xs:w-[40vh] h-[60vh] bg-[#131010] p-5 space-y-[50px]"
            style={{
              boxShadow: "4px 4px 15px 3px #4CFFB4, -4px -4px 15px 3px #9747FF",
            }}
          >
            <input
              type="text"
              placeholder={"Enter Your Name"}
              className={inputStyle}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder={"Enter Your Email"}
              className={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              typeof="text"
              placeholder={"Enter Your Message"}
              className={`${inputStyle} max-h-[200px] min-h-[50px] custom_scroll_wheel`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              type="submit"
              className={`gradient-border w-fit px-20 font-robot font-black hover:cursor-pointer text-[28px] hover:text-primary_green`}
            >
              Send.
            </button>
          </div>
        </form>
      </div>

      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="w-full h-full repeat_green_dots_2 opacity-35" />
        <div className="w-full h-full radial_gradient3" />
      </div>
    </section>
  );
}
