import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial } = review;
  return (
    <div className="w-full max-w-md bg-white shadow-lg p-6 rounded-2xl border border-gray-100">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-teal-600 text-3xl mb-4" />

      {/* Text */}
      <p className="mb-6">{testimonial}</p>

      <div className="border-t border-gray-200 my-4"></div>

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-teal-700"></div>

        <div>
          <h3 className="font-semibold text-gray-800">{userName}</h3>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
