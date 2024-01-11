import React from "react";

const FeaturedCard = ({ raised, goal, title, img }) => {
  const perc = goal / raised;
  const remPerc = 100 - perc;
  const line1 = "w-[" + perc + "%]";
  const line2 = "w-[" + remPerc + "%]";
  console.log(line1 + " " + line2);
  return (
    <div class="featured-card">
      <div class="feature-img">
        <img src={img} />
        <div class="feature-bar">
          <div class="line">
            <span class={line1 + " line-1"}></span>
            <span class={line2 + " line-2 "}></span>
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
        <button>Donate Now</button>
      </div>
    </div>
  );
};

export default FeaturedCard;
