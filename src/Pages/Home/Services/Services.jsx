import React from "react";
import serviceImg from "../../../assets/service.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 6,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <div className="bg-secondary p-15 mt-14 rounded-2xl">
      <div className="text-center text-white space-y-4 mb-5">
        <h1 className="text-2xl font-semibold">Our Services</h1>
        <p className="">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <div className="bg-white rounded-lg p-4 text-center hover:bg-primary">
            <img
              src={serviceImg}
              alt={serviceImg}
              className="mb-3 mx-auto p-4 rounded-full bg-linear-to-b from-[#EEEDFC] to-[#EEEDFC100]"
            />
            <h1 className="text-xl font-bold text-secondary mb-1">
              {service.title}
            </h1>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
