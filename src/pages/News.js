import React, { useLayoutEffect } from "react";
import NewsCard from "../components/NewsCard";

const News = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log("fdfddf");
  }, []);
  return (
    <div className="flex flex-col mb-[120px]">
      <div
        className="flex justify-center items-start w-full h-[320px] bg-cover bg-no-repeat bg-right md:bg-center p-5"
        id="about-banner"
      >
        <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
          <h1 className="text-6xl tracking-tighter  font-sans">News</h1>
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

      <NewsCard />
    </div>
  );
};

export default News;
