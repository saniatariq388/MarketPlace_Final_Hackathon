import React from 'react';
import Image from 'next/image';

export function FoodItem() {
 
   
  return (
    <div>
      <div className="text-white">
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <div className="flex flex-wrap -mx-4 py-8 sm:py-12 md:py-16">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <div className="row-span-2 w-full h-auto aspect-[7/11]">
                <Image
                  src="/images/shawarma.png"
                  alt="Tacos"
                  width={350}
                  height={550}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <Image
                src="/images/kabab2.png"
                alt="Fried food"
                width={300}
                height={300}
                className="rounded-lg w-full h-auto object-cover"
              />
              <Image
                src="/images/why2.png"
                alt="Salad"
                width={312}
                height={400}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-[250px]">
            <h3 className="text-green-500 font-serif text-lg sm:text-xl mb-2">About us</h3>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] leading-tight sm:leading-[56px] text-black font-bold mb-4 sm:mb-8">
              Food is an important part Of a balanced Diet
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-6 sm:leading-8 mb-6 sm:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
              volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
              mattis vitae mus risus.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-green-700 w-full sm:w-[195px] h-[58px] text-white text-base sm:text-[18px] leading-[26px] px-6 sm:px-12 py-3 sm:py-4 rounded-md font-semibold">
                Show more
              </button>
              <button className="flex items-center justify-center sm:justify-start space-x-2 text-white">
                <div className="bg-green-700 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-black font-bold text-sm sm:text-base">Watch video</span>
              </button>
            </div>
          </div>
        </div>

        {/* Food Category Section */}
        <div className="py-8 sm:py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold text-center mb-2">Food category</h2>
          <p className="text-gray-400 text-center text-sm sm:text-base mb-6 sm:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden sm:inline" />
            Varius sed pharetra dictum neque massa congue
          </p>
        </div>

        <div className="w-full max-w-[1320px] mx-auto flex gap-4 sm:gap-6 overflow-x-auto pb-6">
          {[
            { title: "Grand Italiano", items: 26 },
            { title: "Pene Salmone", items: 23 },
            { title: "Molto Tagliatelle", items: 20 },
            { title: "Pepperoni tegli", items: 20 },
          ].map((category, index) => (
            <div key={index} className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[550px] text-center">
              <Image
                src="/images/cupcake.png"
                alt={category.title}
                width={550}
                height={600}
                className="rounded-lg mb-4 w-full h-auto object-cover"
              />
              <h3 className="text-lg sm:text-xl text-black font-semibold mb-1">{category.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {category.items} Item{category.items !== 1 ? "s" : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
    
   
    
  );

}

export default FoodItem;
