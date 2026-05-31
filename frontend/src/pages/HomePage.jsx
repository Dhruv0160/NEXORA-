import React from "react";
import HeroSection from "../components/sections/Hero";
import CoreServices from "../components/sections/CoreServices";
import TechStack from "../components/sections/TechStack";
import UseCases from "../components/sections/UseCases";
import CTASection from "../components/sections/CTASection";

const HomePage = () => (
  <>
    <HeroSection />
    <CoreServices />
    <TechStack />
    <UseCases />
    <CTASection />
  </>
);

export default HomePage;
