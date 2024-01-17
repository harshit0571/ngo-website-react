import axios from "axios";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { act } from "react-dom/test-utils";

const Contact = () => {
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Name, setName] = useState("");
  const Post = async () => {
    const res = await axios.post("http://localhost:8000/contactus/add", {
      name: Name,
      email: Email,
      message: Message,
    });
    console.log(res);
  };

  const [Time, setTime] = useState(false);
  const Send = () => {
    setTime(true);
    Post();
    setTimeout(() => {
      setTime(false);
      setEmail("");
      setName("");
      setMessage("");
    }, 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("fdfddf");
  }, []);
  const inputRef = useRef("");
  const nameRef = useRef("");
  const messRef = useRef("");

  return (
    <section class="text-gray-600 body-font relative">
      {Time ? (
        <div className="bg-white border-8 border-red-600 w-[300px] h-[500px] z-50 inset-0 absolute m-auto flex flex-col p-4 overflow-y-auto">
          <h1 className="text-2xl mb-4 text-red-500 font-bold text-center">
            Thanks for contacting us
          </h1>
          <p className="text-center">We will reply to you soon!!</p>
          <span className="text-red-500 text-2xl mt-5">Email: </span>
          {Email}

          <p className="mt-4 mb-5 w-[100%]">
            <span className="text-red-500 text-2xl mt-5">Message: </span>
            <br />

            {Message}
          </p>
        </div>
      ) : (
        <></>
      )}
      <div class="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            Send your query to through email.
          </p>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="email"
              required
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              required
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              required
              value={Message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            onClick={Send}
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
