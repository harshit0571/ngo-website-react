import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedCard = ({ raised, goal, title, img }) => {
  const nav = useNavigate();
  const perc = raised > 0 ? Math.round((raised / goal) * 100) : 0;
  const remPerc = 100 - perc;

  const line1 = `w-[${perc}%]`;
  const line2 = `w-[${remPerc}%]`;

  console.log(line1 + " " + line2);
  return (
    <div class="featured-card">
      <div class="feature-img">
        <img src={img} />
        <div class="feature-bar">
          <div class="line">
            <span class={"line-1 " + line1}></span>
            <span class={"line-2 " + line2}></span>
            <p>{goal / raised}%</p>
          </div>
        </div>
      </div>
      <div class="feature-text">
        <div class="stats">
          <p>Raised: ${raised}</p>
          <p>Goal: ${goal}</p>
        </div>
        <div class="feature-heading">{title}</div>
        <button
          onClick={() => {
            nav("/causes");
          }}
          className="cursor-pointer"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default FeaturedCard;
