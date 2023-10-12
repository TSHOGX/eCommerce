"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function About() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: any }) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_d14o2as",
        "template_pl3c01x",
        {
          from_name: form.name,
          to_name: "Shiwen Han",
          from_email: form.email,
          to_email: "tshogx@gmail.com",
          message: form.message,
        },
        "m3BZ3eNy5VDDxa7q8"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! We will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Oops, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className=" container mx-auto">
      <div className=" mx-20 mb-20">
        <div className=" w-fit justify-center my-12 mx-8 md:mx-auto">
          <Image
            className=" max-w-full"
            src="./black-logo-full.png"
            alt="black logo full"
          />
        </div>

        {/* Content */}
        <div className=" flex flex-col xl:flex-row justify-between gap-20 xl:gap-52">
          {/* Developers */}
          <div className=" flex flex-col gap-16">
            <div className=" text-2xl">Developers</div>

            <div className=" flex flex-col gap-8">
              <div className=" grid lg:grid-cols-2 gap-2">
                <div className=" flex gap-4">
                  <img
                    className=" rounded-full w-16 h-16"
                    src="https://avatars.githubusercontent.com/u/46259514?s=64&v=4"
                  />
                  <div className=" flex flex-col h-full gap-4">
                    <div className=" text-xl">Shiwen Han</div>
                    <div className=" text-xs text-gray-400">
                      han.1970@buckeyemail.osu.edu
                    </div>
                  </div>
                </div>
                <div className=" mx-2 lg:mx-0 text-sm">CFO</div>
              </div>

              <div className=" grid lg:grid-cols-2 gap-2">
                <div className=" flex gap-4">
                  <Image
                    className=" rounded-full w-16 h-16"
                    src="https://avatars.githubusercontent.com/u/13644713?v=4"
                    alt="avatar"
                  />
                  <div className=" flex flex-col h-full gap-4">
                    <div className=" text-xl">Will Keiser</div>
                    <div className=" text-xs text-gray-400">
                      keiser.70@buckeyemail.osu.edu
                    </div>
                  </div>
                </div>
                <div className=" mx-2 lg:mx-0 text-sm">
                  VP of Engineering. 4 years of education at The Ohio State
                  University, and 1 year of experience with J.P. Morgan Chase.
                </div>
              </div>

              <div className=" grid lg:grid-cols-2 gap-2">
                <div className=" flex gap-4">
                  <Image
                    className=" rounded-full w-16 h-16"
                    src="https://avatars.githubusercontent.com/u/91095404?s=96&v=4"
                    alt="avatar"
                  />
                  <div className=" flex flex-col h-full gap-4">
                    <div className=" text-xl">Hailie Payne</div>
                    <div className=" text-xs text-gray-400">
                      payne.733@buckeyemail.osu.edu
                    </div>
                  </div>
                </div>
                <div className=" mx-2 lg:mx-0 text-sm">
                  CTO. BS in Computer Science & Engineering, The Ohio State
                  University. SEP Intern at J.P. Morgan Chase & Co., June 2022 -
                  Present.
                </div>
              </div>

              <div className=" grid lg:grid-cols-2 gap-2">
                <div className=" flex gap-4">
                  <Image
                    className=" rounded-full w-16 h-16"
                    src="https://avatars.githubusercontent.com/u/76884323?v=4"
                    alt="avatar"
                  />
                  <div className=" flex flex-col h-full gap-4">
                    <div className=" text-xl">Jingjun Gu</div>
                    <div className=" text-xs text-gray-400">
                      gu.733@buckeyemail.osu.edu
                    </div>
                  </div>
                </div>
                <div className=" mx-2 lg:mx-0 text-sm">
                  CEO. MS in Computer Science & Engineering.
                </div>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className=" flex flex-col gap-16 xl:max-w-md mb-40 xl:mb-0">
            <div className=" text-2xl">About Us</div>
            <div className=" text-base">
              An E-Commerce Website designed for CSE 5234. Data used for the
              project is scraped from Nike Inc, so our website name is Nikia.
              This website was created using NextJS.
            </div>

            <form onSubmit={handleSubmit} className=" flex flex-col gap-2">
              <div className=" flex flex-row justify-between">
                <div className=" text-2xl">Contact</div>
                <button
                  type="submit"
                  className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Name"
              ></input>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Email Address"
              ></input>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Leave us a message..."
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
