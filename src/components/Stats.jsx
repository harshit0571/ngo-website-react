import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Stats = ({ donation, User }) => {
  const [UserDonations, setUserDonations] = useState([]);

  useEffect(() => {
    const getDonations = async () => {
      const res = await axios.get(
        `http://localhost:8000/donations/${User.session.username}`,
        {
          withCredentials: true,
        }
      );
      setUserDonations(res.data.reverse());
      console.log(User.session.username, "donation");
    };
    getDonations();
  });
  return (
    <div className="w-full p-4">
      <div className="w-full">
        <table className="w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>

              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Donation Date</th>
            </tr>
          </thead>
          <tbody>
            {UserDonations.map((donation) => (
              <tr key={donation.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-black text-center">
                  {donation.id}
                </td>
                <td className="py-2 px-4 border-b text-black text-center">
                  {donation.Amount}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {donation.Donation_Date.slice(0, 10)}{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stats;
