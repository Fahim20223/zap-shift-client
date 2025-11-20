import React from "react";
import Banner from "../Banner/Banner";
import Works from "../Works/Works";
import Services from "../Services/Services";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import Questions from "../Questions/Questions";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div className="bg-[#f1f0f0]">
      <Banner />
      <Works />
      <Services />
      <Brands />
      <Reviews reviewsPromise={reviewsPromise} />
      <Questions />
    </div>
  );
};

export default Home;
