import React from "react";
import Hero from "../components/sections/Hero";
import BrandMarquee from "../components/sections/BrandMarquee";
import CoreServices from "../components/sections/CoreServices";
import TechStack from "../components/sections/TechStack";
import SuccessStories from "../components/sections/SuccessStories";
import Testimonials from "../components/sections/Testimonials";
import CTASection from "../components/sections/CTASection";

const HomePage = () => (
  <>
    <Hero />
    <BrandMarquee />
    <CoreServices />
    <TechStack />
    <SuccessStories />
    <Testimonials />
    <CTASection />
  </>
);

export default HomePage;
