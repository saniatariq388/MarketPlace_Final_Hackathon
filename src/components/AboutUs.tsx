//src\components\AboutUs.tsx

import { greatVibesFont } from '@/font'
import { Check } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'


 async function AboutUs() {

  const  res = await client.fetch("*[_type == 'landingPage']{'aboutusImageOne':sections[1].aboutusImageOne.asset->url,'aboutusImageTwo':sections[1].aboutusImageTwo.asset->url,'aboutusImageThree':sections[1].aboutusImageThree.asset->url,'mainHeading': sections[1].mainHeading,'description': sections[1].description,'aboutusButtonText':sections[1].aboutusButtonText}")

  const { aboutusImageOne, aboutusImageTwo, aboutusImageThree, mainHeading, description, aboutusButtonText} = res[0]
  return (
    <>
      <div className="w-full flex items-center justify-center bg-black">
        <div className="w-full max-w-[1320px] flex flex-col lg:flex-row gap-12 lg:gap-[98px] justify-between px-4">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-4">
            <h1
              className={`${greatVibesFont.className} text-[32px] leading-[40px] text-orange-500`}
            >
              <span className="text-6xl">a</span>bout us
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              <span className="text-orange-500">We</span> {mainHeading}
            </h1>
            <p className="text-[16px] leading-[24px] text-white">
              {description}
            </p>
            <div className="flex gap-2 items-center">
              <Check color="white" />
              <p className="text-white">
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Check color="white" />
              <p className="text-white">
                Quisque diam pellentesque bibendum non dui volutpat fringilla.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Check color="white" />
              <p className="text-white">
                Lacus nisi, et ac dapibus sit eu velit in consequat elit.
              </p>
            </div>
            <Link href="/about">
              <Button className="bg-[#FF9F0D] w-[190px] h-[60px] text-white rounded-full px-8 py-4 hover:bg-[#FF9F0D]/90">
                {aboutusButtonText}
              </Button>
            </Link>
          </div>

          {/* Right Content */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full h-auto col-span-2">
              <Image
                src={aboutusImageOne}
                alt="eggs image"
                width={660}
                height={330}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full h-auto">
              <Image
                src={aboutusImageTwo}
                alt="kabab"
                width={322}
                height={194}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full h-auto">
              <Image
                src={aboutusImageThree}
                alt="burger"
                width={322}
                height={194}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;


