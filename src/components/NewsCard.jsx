import React from "react";

const NewsCard = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Ngo Latest News
            </h1>
            <div class="h-1 w-20 bg-red-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="assets/feature1.png"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                News
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Banglore Charity
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="assets/feature2.png"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                News
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Mumbai Charity
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="assets/feature3.png"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                News
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Delhi Charity
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="assets/about.png"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                News
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Kolkata News
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
