import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const Works = () => {
  const works = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div>
      <h3 className="font-bold mb-3 text-2xl text-secondary">How It Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-secondary">
        {works.map((work) => (
          <div className="p-4 shadow rounded-lg bg-white" key={work.id}>
            <p>
              <CiDeliveryTruck size={45} />
            </p>
            <h1 className="font-bold text-xl">{work.title}</h1>
            <p className="text-gray-600">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
