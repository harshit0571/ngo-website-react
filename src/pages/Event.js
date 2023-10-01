import React from "react";
import Card from "../components/Card";
import EventsCards from "../components/EventsCards";

const Events = () => {
  return (
    <div className="w-full mb-[120px]">
      <div className="w-full h-20 bg-red-500 flex items-center justify-center">
        <h1 className="text-white font-sans text-5xl">Events</h1>
      </div>
      <div className="w-full h-[400px] flex items-center justify-center relative">
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
        <div className="absolute m-auto left-5 md:top-20 md:left-10">
          <div className="w-[250px] bg-white border-2 border-black  flex flex-col">
            <img src="assets/event.jpg" className="w-full" />
            <p className="text-center p-4">
              ngo event: 20th november <br /> 123, street, xyz state, abc
              country
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-5xl mt-5">
        Upcoming{" "}
        <span className="text-red-500 text-center text-5xl mt-5">Events</span>
      </h1>
      <EventsCards />
    </div>
  );
};

export default Events;
