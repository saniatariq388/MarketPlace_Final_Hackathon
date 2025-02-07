import React from 'react'
import Image from "next/image"
import { greatVibesFont } from '@/font'
import { client } from '@/sanity/lib/client'



async function Foods() {

  const res = await client.fetch(" *[_type == 'landingPage']{'heading': sections[2].heading,'subHeading': sections[2].subHeading,'foodCategoryImageOne':sections[2].foodCategoryImageOne.asset->url,'foodCategoryImageTwo':sections[2].foodCategoryImageTwo.asset->url,'foodCategoryImageThree':sections[2].foodCategoryImageThree.asset->url,'foodCategoryImageFour':sections[2].foodCategoryImageFour.asset->url,'foodCategoryImageFive':sections[2].foodCategoryImageFive.asset->url,}")

  const { heading, subHeading, foodCategoryImageOne, foodCategoryImageTwo, foodCategoryImageThree, foodCategoryImageFour, foodCategoryImageFive } = await res[0]


  return (
    <div>
      <div className="w-full mb-[110px] bg-[#050505] flex items-center justify-center px-4">
        <div className="w-full max-w-[1360px] mt-[120px] flex flex-col items-center justify-center">
          {/* Header Section */}
          <div className="flex flex-col text-center">
            <h1
              className={`${greatVibesFont.className} text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] text-orange-500`}
            >
              {heading}
            </h1>
            <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-extrabold text-white">
              <span className="text-orange-500">Ch</span>oose {subHeading}
            </h1>
          </div>

          {/* Food Grid */}
          <div className="w-full max-w-[1320px] grid gap-6 md:gap-[32px] grid-cols-2 md:grid-cols-4 mt-[56px] cursor-pointer">
            <div className="relative w-full transform hover:scale-105">
              <Image
                src={foodCategoryImageOne}
                alt="salad image"
                width={320}
                height={300}
                className="w-full h-auto"
              />
              <div className="absolute w-[125px] h-[40px] z-10 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-[16px] py-2 leading-[26px] bg-white text-center text-orange-600 ">
                Save 30%
              </div>
              <div className="absolute w-[200px] h-[46px] z-10 top-[70%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-[16px] py-2 leading-[26px] bg-orange-500 text-center text-white">
                Fast Food Dish
              </div>
            </div>
            <div className="relative w-full transform hover:scale-105">
              <Image
                src={foodCategoryImageTwo}
                alt="burger image"
                width={320}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="relative w-full transform hover:scale-105">
              <Image
                src={foodCategoryImageThree}
                alt="salad image"
                width={320}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="relative w-full transform hover:scale-105">
              <Image
                src={foodCategoryImageFour}
                alt="donuts image"
                width={320}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Foods;


