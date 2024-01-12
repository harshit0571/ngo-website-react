import React, { useEffect, useLayoutEffect, useState } from "react";
import Stats from "../components/Stats";
import FeaturedCauses from "../components/FeaturedCauses";
import DonationCard from "../components/DonationCard";
import axios from "axios";

const Causes = () => {
  const active = "bg-white text-red-500";
  const inactive = "bg-red-500 text-white";
  const [One, setOne] = useState(inactive);
  const [Two, setTwo] = useState(inactive);
  const [Three, setThree] = useState(active);
  const [User, setUser] = useState({ session: null });
  const [UserDonations, setUserDonations] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const checkSession = async () => {
      const res = await axios.get("http://localhost:8000/user/login", {
        withCredentials: true,
      });
      setUser(res.data);
      console.log(User, "cause");
      return User;
    };

    checkSession();

    console.log(User, "fdfdfdfdfrjieurireuieru");
  }, []);

  return (
    <div className="mb-[120px] flex flex-col items-center">
      <div
        className="flex justify-center items-start w-full h-[320px] bg-cover bg-no-repeat bg-right md:bg-center p-5"
        id="causes-banner"
      >
        <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
          <h1 className="text-6xl tracking-tighter font-sans">Our Causes</h1>
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

      <div className="flex w-full items-center flex-col mt-10">
        <div className="md:w-[80%] w-[98%] flex items-start">
          <h1 className="text-3xl font-bold py-5">
            Ensure Education For Every Poor Children
          </h1>
        </div>

        <div className="flex flex-col md:w-[80%] w-[98%] border-2 border-black items-center">
          {/* <img
            src="assets/causes-edu.jpg"
            className="w-full h-[200px] md:h-[500px]"
          /> */}
          <div className="w-full">
            <div className="w-full h-20 bg-red-500 flex">
              <button
                className={
                  "border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-red-500 rounded-none text-lg " +
                  Three
                }
                bg-white
                text-red-500
                onClick={() => {
                  setOne(inactive);
                  setTwo(inactive);
                  setThree(active);
                }}
              >
                Donations
              </button>
              <button
                className={
                  "border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-red-500 rounded-none text-lg " +
                  Two
                }
                onClick={() => {
                  setOne(inactive);
                  setTwo(active);
                  setThree(inactive);
                }}
              >
                Featured Causes
              </button>
              {User.session && (
                <button
                  className={
                    "border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-red-500 rounded-none text-lg " +
                    One
                  }
                  onClick={() => {
                    setOne(active);
                    setTwo(inactive);
                    setThree(inactive);
                  }}
                >
                  My Donations
                </button>
              )}
            </div>

            <div className="w-full">
              {One == active && <Stats User={User} />}
              {Two == active && <FeaturedCauses />}
              {Three == active && <DonationCard User={User && User.session} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Causes;
