import React from "react";

import HeroBanner from "../components/HeroBanner";
import OnlineCourses from "../components/OnlineCourses";
import ITStaffing from "../components/ITStaffing";
import Projects from "../components/Projects";
import Why from "../components/Why";
import Trainers from "../components/Trainers";
import Clients from "../components/Clients";
import Reviews from "../components/Reviews";

const Home: React.FC<any> = (props) => {
  return (
    <>
      <HeroBanner />
      <Clients />
      <OnlineCourses />
      <ITStaffing />
      <Projects />
      <Why />
      <Trainers />
      <Reviews />
    </>
  );
};

export default Home;
