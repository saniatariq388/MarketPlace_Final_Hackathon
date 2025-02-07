// 'use client'

// import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent } from "@/components/ui/card"
// import { menuItems } from '@/constant/menuItem'
// import { Button } from './ui/button'
// import Link from 'next/link'
// import { client } from '@/sanity/lib/client'

//  async function OurMenu() {
//   interface MenuItems {
//     heading: string;
//     subHeading: string;
//     menuImageOne: string;
//     menuCards: {
//     menuFoodImage: string;
//     menuFoodHeading: string;
//     menuImageDescription: string;
//     menuFoodPrice: number;
//     }[];
//   }

//   const [menuItems, setMenuItems] = useState<MenuItems | null>(null);

//   // fetch data using useEffect
//  useEffect(() => {
//   async function fetchData(){
//     const res = await client.fetch(" *[_type == 'landingPage'][0]{'heading': sections[3].heading,'subHeading': sections[3].subHeading,'menuImageOne':sections[3].menuImageOne.asset->url,'menuCards':sections[3].menuCards[]{'menuFoodImage': menuFoodImage.asset->url,'menuFoodHeading': menuFoodHeading,'menuImageDescription': menuImageDescription,'menuFoodPrice': menuFoodPrice}}");
//     setMenuItems(res);
//   }
//   fetchData();
// },[]
//  );
//  if(!menuItems) return null;

//   const {heading, subHeading, menuImageOne, menuCards, menuFoodImage, menuFoodHeading, menuImageDescription, menuFoodPrice} = menuItems ;

//   return (
//   <>
//       <div>
//       {/* MENU-SECTION */}
//       {menuItems? (
//       <section className="container mx-auto px-4 py-24">
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <span className="font-['Great_Vibes'] text-3xl text-[#FF9F0D]">{heading}</span>
//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span className="text-[#FF9F0D]">Fr</span>om {subHeading}
//           </h2>
//         </div>

//         {/* Tabs */}
//         <Tabs defaultValue="breakfast" className="w-full">
//           {/* Tabs Navigation */}
//           <TabsList className="mb-8 flex flex-wrap justify-center gap-4">
//             {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((tab) => (
//               <TabsTrigger
//                 key={tab.toLowerCase()}
//                 value={tab.toLowerCase()}
//                 className="text-base md:text-xl data-[state=active]:text-[#FF9F0D]"
//               >
//                 {tab}
//               </TabsTrigger>
//             ))}
//           </TabsList>

//           {/* Tab Content */}
//           <div className="flex flex-wrap gap-6 justify-center">
//             <div className="flex-shrink-0 w-full md:w-auto">
//               <Image src={menuImageOne} alt="food" width={320} height={365} />
//             </div>
//             <TabsContent value="breakfast">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {(menuItems.menuCards).map((item: any, index:number) => (
//                   <Card key={index} className="overflow-hidden border-none bg-transparent">
//                     <CardContent className="flex items-start gap-4 p-0">
//                       <Image
//                         src={menuItems.menuCards[index].menuFoodImage}
//                         alt={item.title}
//                         className="h-20 w-20 rounded-md object-cover"
//                         width={80}
//                         height={80}
//                       />
//                       <div className="flex flex-col gap-2">
//                         <h3 className="text-lg md:text-xl font-bold text-white">{menuItems.menuCards[index].menuFoodHeading}</h3>
//                         <p className="text-sm text-gray-400">{item.description}</p>
//                         <span className="text-base md:text-lg font-bold text-[#FF9F0D]">
//                           {item.price.toFixed(2)}$
//                         </span>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </TabsContent>
//           </div>
//         </Tabs>
//       </section>
//        ) : []}
//       { /* CHEF SECTION */}
//       <div className="w-full flex flex-col mt-24 items-center justify-center">
//         {/* Section Header */}
//         <h2 className="font-['Great_Vibes'] text-3xl text-[#FF9F0D]">Chefs</h2>
//         <h1 className="text-4xl md:text-5xl text-white font-bold mb-8">
//           <span className="text-[#FF9F0D]">Me</span>et Our Chef
//         </h1>

//         {/* Chef Cards */}
//         <div className="grid grid-cols- sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {["Chef1.png", "Card2.png", "Card3.png", "Card4.png"].map((image, index) => (
//             <div key={index} className="w-[312px] h-auto">
//               <Image src={`/images/${image}`} alt="Chef" width={350} height={410} />
//             </div>
//           ))}
//         </div>

//         {/* See More Button */}
//         <div className="w-[155px] h-[50px] mt-10 rounded-full border-2 border-[#FF9F0D] flex justify-center items-center">
//           <Link href="/ourChef">
//             <Button>See More</Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </>
//   );
// }

// export default OurMenu;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface MenuItems {
  heading: string;
  subHeading: string;
  menuImageOne: string;
  menuCards: {
    menuFoodImage: string;
    menuFoodHeading: string;
    menuImageDescription: string;
    menuFoodPrice: number;
  }[];
}

function OurMenu() {
  const [menuItems, setMenuItems] = useState<MenuItems | null>(null);

  // Fetch data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      const res = await client.fetch(
        "*[_type == 'landingPage'][0]{'heading': sections[3].heading,'subHeading': sections[3].subHeading,'menuImageOne':sections[3].menuImageOne.asset->url,'menuCards':sections[3].menuCards[]{'menuFoodImage': menuFoodImage.asset->url,'menuFoodHeading': menuFoodHeading,'menuImageDescription': menuImageDescription,'menuFoodPrice': menuFoodPrice}}"
      );
      setMenuItems(res);
    };

    fetchData();
  }, []);

  if (!menuItems) {
    return <p className="text-white text-center">Loading...</p>;
  }

  const { heading, subHeading, menuImageOne, menuCards: menuCards } = menuItems;

  return (
    <>
      {/* MENU-SECTION */}
      <section className="container mx-auto px-4 py-24">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-['Great_Vibes'] text-3xl text-[#FF9F0D]">
            {heading}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#FF9F0D]">Fr</span>om {subHeading}
          </h2>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-center gap-4">
            {[
              "Breakfast",
              "Lunch",
              "Dinner",
              "Dessert",
              "Drink",
              "Snack",
              "Soups",
            ].map((tab) => (
              <TabsTrigger
                key={tab.toLowerCase()}
                value={tab.toLowerCase()}
                className="text-base md:text-xl data-[state=active]:text-[#FF9F0D]"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex-shrink-0 w-full md:w-auto">
              <Image
                src={menuImageOne || "/placeholder.svg"}
                alt="food"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            <TabsContent value="breakfast">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {menuCards.map((item: any, index: number) => (
                  <Card
                    key={index}
                    className="overflow-hidden border-none bg-transparent"
                  >
                    <CardContent className="flex items-start gap-4 p-0">
                      <Image
                        src={menuCards[index].menuFoodImage || "/placeholder.svg"}
                        alt={item.menuFoodHeading}
                        className="h-20 w-20 rounded-md object-cover"
                        width={25}
                        height={25}
                      />
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {menuCards[index].menuFoodHeading}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {menuCards[index].menuImageDescription}
                        </p>
                        <span className="text-base md:text-lg font-bold text-[#FF9F0D]">
                          {menuCards[index].menuFoodPrice.toFixed(2)}$
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </section>

      {/* CHEF SECTION */}
      <div className="w-full flex flex-col mt-24 items-center justify-center">
        <h2 className="font-['Great_Vibes'] text-3xl text-[#FF9F0D]">Chefs</h2>
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-8">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Chef1.png", "Card2.png", "Card3.png", "Card4.png"].map(
            (image, index) => (
              <div key={index} className="w-[312px] h-auto">
                <Image
                  src={`/images/${image}`}
                  alt="Chef"
                  width={350}
                  height={410}
                />
              </div>
            )
          )}
        </div>

        {/* See More Button */}
        <div className="w-[155px] h-[50px] mt-10 rounded-full border-2 border-[#FF9F0D] flex justify-center items-center">
          <Link href="/ourChef">
            <Button>See More</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default OurMenu;
