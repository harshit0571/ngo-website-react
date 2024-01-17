import Card from "../components/Card";
import EventsCards from "../components/EventsCards";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Events = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log("fdfddf");
  }, []);

  const [data, setdata] = useState([]);
  const [Ldata, setLdata] = useState([
    { title: "", photo_url: "", date: "", address: "", city: "" },
  ]);
  useEffect(() => {
    const getEvents = async () => {
      const res = await axios.get("http://localhost:8000/events");
      console.log(res.data);
      setdata(res.data);
    };
    getEvents();
    const getEventLatest = async () => {
      const res = await axios.get("http://localhost:8000/events/latest");
      console.log(res.data);
      setLdata(res.data);
    };
    getEventLatest();
  }, []);
  return (
    <div className="w-full mb-[120px]">
      <div className="w-full h-20 bg-red-500 flex items-center justify-center">
        <h1 className="text-white font-sans text-5xl">Events</h1>
      </div>
      <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center relative">
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
        <div className="absolute m-auto left-5 md:top-10 md:left-10">
          <div className="w-[250px] bg-white border-2 border-black  flex flex-col">
            <img src={Ldata[0].photo_url} className="w-full" />
            <h3 className="text-center text-red-500 font-bold mt-2">
              Upcoming Event
            </h3>

            <p className="text-center p-1">
              {Ldata[0].title}
              <br /> {Ldata[0].date.slice(0, 10)} {Ldata[0].date.slice(11, 16)}{" "}
              <br /> {Ldata[0].address}
              <br />
              {Ldata[0].city}
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-5xl mt-5">
        Upcoming{" "}
        <span className="text-red-500 text-center text-5xl mt-5">Events</span>
      </h1>
      <EventsCards data={data} />
    </div>
  );
};

export default Events;
