import React from "react";
import "../App.css";
import Card from "../components/Card";
import AboutCard from "../components/AboutCard";
import axios from "axios";
import { useState } from "react";

const About = () => {
  const [data, setdata] = useState([]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  React.useEffect(() => {
    const getMilestones = async () => {
      const res = await axios.get("http://localhost:8000/milestones", {
        responseType: "json",
      });
      console.log(res);
      setdata(res.data);
    };
    getMilestones();
  }, []);

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-center items-start w-full h-[320px] bg-cover bg-no-repeat bg-right md:bg-center p-5"
        id="about-banner"
      >
        <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
          <h1 className="text-6xl tracking-tighter  font-sans">About Us</h1>
          <p className="text-gray-200">
            We are a team of dedicated individuals, volunteers, and supporters
            who share a common vision: to alleviate suffering, promote equality,
            and uplift communities. With unwavering determination and a
            heartfelt passion for change, we have undertaken numerous projects
            and initiatives, all aimed at addressing the pressing challenges
            faced by marginalized individuals and communities.
          </p>
        </div>
      </div>

      <div className="w-full bg-[var(--red)] py-10 pb-[100px] flex-col justify-around items-center">
        <h1 className="text-center text-2xl tracking-tighter font-bold text-white">
          OUR MILESTONES
        </h1>
        <div className="flex flex-wrap flex-col sm:flex-row items-center mt-7 gap-5 w-full justify-around">
          {data &&
            data.map((milestone) => {
              return (
                <Card
                  key={milestone.id}
                  heading={milestone.year}
                  para={milestone.title}
                  desc={milestone.description}
                  img={milestone.photourl}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default About;
