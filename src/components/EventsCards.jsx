import axios from "axios";
import React, { useEffect, useState } from "react";

const EventsCards = ({ data }) => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {data.map((data) => {
            return (
              <div class="p-4 lg:w-1/3">
                <div
                  id="event2"
                  class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${data.photo_url})`,
                  }}
                >
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">
                    {data.city}
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                    {data.title}
                  </h1>
                  <p class="leading-relaxed text-gray-300 mb-3">
                    {data.description}
                  </p>
                  <a class="text-green-100 inline-flex items-center">
                    Date: {data.date}
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsCards;
