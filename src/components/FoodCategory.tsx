import React from "react";
import Image from "next/image";
import { Card } from "./ui/card";
import { categoryCard } from "@/constant/cards";

function FoodCategory() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center overflow-hidden">
        <Image src="/images/backpic.png" alt="background" layout="fill" objectFit="cover" className="opacity-20" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categoryCard.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-transparent bg-opacity-80 rounded-lg shadow-md transition-transform hover:scale-105"
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                />
                <p className="mt-4 text-sm sm:text-base font-medium">{item.name}</p>
                <p className="mt-2 text-sm text-white">{item.rating} Stars</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodCategory

