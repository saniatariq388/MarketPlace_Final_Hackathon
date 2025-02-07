//src\app\page.tsx
import React from "react";
import HeaderHero from "@/components/HeaderHero";
import AboutUs from "@/components/AboutUs";
import Foods from "@/components/Foods";
import FoodCategory from "@/components/FoodCategory";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurMenu from "@/components/OurMenu";
import Testimonials from "@/components/Testimonials";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";


export default function Home() {
  return (
  <div className="w-full bg-black">
    <HeaderHero />
    <AboutUs/>
    <Foods/>
    <WhyChooseUs/>
    <FoodCategory/>
    <OurMenu/>
    <Testimonials/>
    <Blogs/>
    <Footer bgColorLastDiv="#ff9f0d" textColor="white"/>
  </div>
  );
}
