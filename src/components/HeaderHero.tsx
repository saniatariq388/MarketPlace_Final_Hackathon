"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

export default function HeaderHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroData, setHeroData] = useState({
    heroImage: "",
    heroHeadingOne: "",
    heroHeadingTwo: "",
    heroDescription: "",
    heroButtonText: "",
  });

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fetch data using useEffect
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.fetch(
          `*[_type == 'landingPage']{
            'heroImage': sections[0].heroImage.asset->url,
            'heroHeadingOne': sections[0].heroHeadingOne,
            'heroHeadingTwo': sections[0].heroHeadingTwo,
            'heroDescription': sections[0].heroDescription,
            'heroButtonText': sections[0].heroButtonText
          }`
        );

        const {
          heroImage = "",
          heroHeadingOne = "",
          heroHeadingTwo = "",
          heroDescription = "",
          heroButtonText = "",
        } = res?.[0] || {};

        setHeroData({
          heroImage,
          heroHeadingOne,
          heroHeadingTwo,
          heroDescription,
          heroButtonText,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const { heroImage, heroHeadingOne, heroHeadingTwo, heroDescription, heroButtonText } = heroData;

  return (
    <div className="w-full ">
      <div className="relative min-h-[950px] w-full bg-[#0D0D0D] overflow-hidden">
        {/* Navigation */}
        <nav className="container flex items-center justify-between mx-auto px-4 py-8">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold flex justify-center items-center hover:text-[#FF9F0D] text-[#FF9F0D]"
            >
              Food<span className="text-white">tuck</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/home" className="font-bold text-white hover:text-[#FF9F0D]">
              Home
            </Link>
            {["Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white hover:text-[#FF9F0D]"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-[#0D0D0D] z-50 md:hidden">
            <div className="flex flex-col items-center space-y-6 py-6">
              <Link
                href="/home"
                className="font-bold text-white hover:text-[#FF9F0D]"
                onClick={handleMenuToggle}
              >
                Home
              </Link>
              {["Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-white hover:text-[#FF9F0D]"
                  onClick={handleMenuToggle}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative mt-[100px] lg:mt-[293px] text-center lg:text-left">
              <div className="space-y-6">
                <span className="font-['Great_Vibes'] text-2xl sm:text-3xl text-[#FF9F0D]">
                  {heroHeadingOne}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-[#FF9F0D]">Th</span>e {heroHeadingTwo}
                </h1>
                <p className="text-white max-w-lg mx-auto lg:mx-0 text-sm md:text-base">
                  {heroDescription}
                </p>
                <Link href="/menu">
                  <Button className="bg-[#FF9F0D] mt-6 text-white rounded-full px-8 py-3 md:py-6 hover:bg-[#FF9F0D]/90">
                    {heroButtonText}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-[50px] lg:mt-[71px] relative">
              {heroImage ? (
                <Image
                  src={heroImage}
                  alt="Food plate with rice and eggs"
                  width={877}
                  height={670}
                  className="mt-[50px] lg:mt-[71px] w-full max-w-[877px] h-[670px]"
                />
              ) : (
                <p className="text-white">Loading image...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
