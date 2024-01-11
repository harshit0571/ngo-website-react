import axios from "axios";
import React, { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedCauses = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getCauses = async () => {
      const res = await axios.get("http://localhost:8000/causes");
      console.log(res.data);
      setdata(res.data);
    };
    getCauses();
  }, []);
  return (
    <section class="feature-section mb-20">
      <p>
        FEATURED <span style={{ color: "var(--red)" }}>CAUSES</span>
      </p>

      <div class="featured-container">
        {data.map((cause) => {
          return (
            <FeaturedCard
              raised={cause.raised_money}
              goal={cause.goal}
              title={cause.title}
              img={cause.photourl}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedCauses;
