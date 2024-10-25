import React from "react";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import Favorites from "../Favorites/Favorites";
import Features from "../Features/Features";
import News from "../News/News";
import NewsLetter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Favorites />
      <Features />
      <NewsLetter />
      <News />
    </>
  );
};

export default Home;
