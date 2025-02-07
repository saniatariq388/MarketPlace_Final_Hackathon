import React from "react";
import Image from "next/image";
import { Card } from "./ui/card";
import { Coffee } from "lucide-react";
import FoodCategory from "./FoodCategory";
import Link from "next/link";

function StartardMenu() {
  return (
    <div>
      <div className="w-full flex flex-col gap-16 md:gap-[120px] items-center px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-[1320px] mt-16 md:mt-[120px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-[112px]">
        <div className="w-full lg:w-[448px] h-auto lg:h-[726px] mt-8 lg:mt-[84px]">
          <Link href="/shop">
            <Image
              src="/images/bowl.png"
              alt="image"
              width={450}
              height={730}
              className="w-full h-auto object-contain"
            />
          </Link>
        </div>
        <div className="w-full lg:w-[760px]">
          <div className="grid gap-8">
            <div className="mb-2 flex flex-col -gap-[12px] ml-4 items-start justify-between">
              <Coffee color="orange" size={40} />
              <h3 className="text-4xl md:text-5xl text-black font-bold">Starter Menu</h3>
            </div>
            {[
              {
                title: "Alder Grilled Chinook Salmon",
                description: "Toasted French bread topped with romano, cheddar",
                calories: "560 CAL",
                price: "32$",
                titleColor: "text-[#195A00]",
              },
              {
                title: "Berries and creme tart",
                description: "Gorgonzola, ricotta, mozarella, taleggio",
                calories: "700 CAL",
                price: "43$",
                titleColor: "text-[orange]",
              },
              {
                title: "Tormentoso Bush Pizza Pintoage",
                description: "Ground cumin, avocados, peeled and cubed",
                calories: "1000 CAL",
                price: "14$",
                titleColor: "text-[#195A00]",
              },
              {
                title: "Spicy Vegan Potato Curry",
                description: "Spreadable Cream cheese, crumbled blue cheese",
                calories: "560 CAL",
                price: "35$",
                titleColor: "text-[#195A00]",
              },
            ].map((item, index) => (
              <Card key={index} className="relative border-none p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
                  <div>
                    <h3 className={`text-xl md:text-2xl font-bold ${item.titleColor}`}>{item.title}</h3>
                    <p className="mb-2 text-sm md:text-base text-gray-600">{item.description}</p>
                    <p className="text-xs md:text-sm text-black">{item.calories}</p>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[orange]">{item.price}</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1320px] mt-16 md:mt-[120px] flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-[112px]">
        <div className="w-full lg:w-[760px]">
          <div className="grid gap-8">
            <div className="mb-2 flex flex-col -gap-[12px] ml-4 items-start justify-between">
              <Coffee color="orange" size={40} />
              <h3 className="text-4xl md:text-6xl text-black font-bold">Starter Menu</h3>
            </div>
            {[
              {
                title: "Alder Grilled Chinook Salmon",
                description: "Toasted French bread topped with romano, cheddar",
                calories: "560 CAL",
                price: "32$",
                titleColor: "text-[#195A00]",
              },
              {
                title: "Berries and creme tart",
                description: "Gorgonzola, ricotta, mozarella, taleggio",
                calories: "700 CAL",
                price: "43$",
                titleColor: "text-[orange]",
              },
              {
                title: "Tormentoso Bush Pizza Pintoage",
                description: "Ground cumin, avocados, peeled and cubed",
                calories: "1000 CAL",
                price: "14$",
                titleColor: "text-[#195A00]",
              },
              {
                title: "Spicy Vegan Potato Curry",
                description: "Spreadable Cream cheese, crumbled blue cheese",
                calories: "560 CAL",
                price: "35$",
                titleColor: "text-[#195A00]",
              },
            ].map((item, index) => (
              <Card key={index} className="relative border-none p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
                  <div>
                    <h3 className={`text-xl md:text-2xl font-bold ${item.titleColor}`}>{item.title}</h3>
                    <p className="mb-2 text-sm md:text-base text-gray-600">{item.description}</p>
                    <p className="text-xs md:text-sm text-black">{item.calories}</p>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[orange]">{item.price}</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
              </Card>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[448px] h-auto lg:h-[726px] mt-8 lg:mt-[84px]">
          <Link href="/shop">
            <Image
              src="/images/bowl.png"
              alt="image"
              width={450}
              height={730}
              className="w-full h-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
      <div className="mt-[120px]  bg-black">
        <FoodCategory />
      </div>
      <div className="w-full flex flex-col gap-8 sm:gap-16 md:gap-[120px] items-center px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[1320px] mt-8 sm:mt-16 md:mt-[120px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-[112px]">
        <div className="w-full lg:w-[448px] h-auto lg:h-[726px] mt-4 lg:mt-[84px]">
          <Link href={"/shop"}>
            <Image
              src="/images/cupcakes.png"
              alt="image"
              width={450}
              height={730}
              className="w-full h-auto object-cover"
            />
          </Link>
        </div>
        <div className="w-full lg:w-[760px]">
          <div className="grid gap-4 sm:gap-6 md:gap-8">
            <div className="mb-2 flex flex-col -gap-[12px] ml-4 items-start justify-between">
              <Coffee color="orange" size={40} />
              <h3 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold">Dessert</h3>
            </div>
            <Card className="relative border-none p-4 sm:p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#195A00]">Fig and lemon cake</h3>
                  <p className="mb-2 text-sm sm:text-base text-gray-600">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-xs sm:text-sm text-black"> 560 CAL</p>
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-[orange]">32$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-4 sm:p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[orange]">Creame mascarpone cake</h3>
                  <p className="mb-2 text-sm sm:text-base text-gray-600">Gorgonzola, ricotta, mozarella, taleggio</p>
                  <p className="text-xs sm:text-sm text-black"> 700 CAL</p>
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-[orange]">43$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-4 sm:p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#195A00]">Paastries, blueberries, lemon juice</h3>
                  <p className="mb-2 text-sm sm:text-base text-gray-600">Ground cumin, avocados, peeled and cubed</p>
                  <p className="text-xs sm:text-sm text-black"> 1000 CAL</p>
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-[orange]">14$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-4 sm:p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#195A00]">Pain au chocolat</h3>
                  <p className="mb-2 text-sm sm:text-base text-gray-600">
                    Spreadable Cream cheese, crumbled blue cheese
                  </p>
                  <p className="text-xs sm:text-sm text-black"> 560 CAL</p>
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-[orange]">35$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1320px] mt-8 sm:mt-16 md:mt-[120px] flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-[112px]">
        <div className="w-full lg:w-[760px]">
          <div className="grid gap-4 sm:gap-6 md:gap-8">
            <div className="mb-2 flex flex-col -gap-[12px] ml-4 items-start justify-between">
              <Coffee color="orange" size={40} />
              <h3 className="text-4xl sm:text-5xl md:text-6xl text-black font-bold">Drinks</h3>
            </div>
            <Card className="relative border-none p-4 sm:p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#195A00]">Caffe macchiato</h3>
                  <p className="mb-2 text-sm sm:text-base text-gray-600">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-xs sm:text-sm text-black"> 560 CAL</p>
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-[orange]">32$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-4 sm:p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[orange]">Aperol Spritz Capacianno</h3>
                  <p className="mb-2 text-sm sm:text-base text-gray-600">Gorgonzola, ricotta, mozarella, taleggio</p>
                  <p className="text-xs sm:text-sm text-black"> 700 CAL</p>
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-[orange]">43$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-4 sm:p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#195A00]">Caffe Latte Campuri</h3>
                  <p className="mb-2 text-sm sm:text-base text-gray-600">Ground cumin, avocados, peeled and cubed</p>
                  <p className="text-xs sm:text-sm text-black"> 1000 CAL</p>
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-[orange]">14$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
            <Card className="relative border-none p-4 sm:p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#195A00]">Tormentoso BushTea Pintoage</h3>
                  <p className="mb-2 text-sm sm:text-base text-gray-600">
                    Spreadable Cream cheese, crumbled blue cheese
                  </p>
                  <p className="text-xs sm:text-sm text-black"> 560 CAL</p>
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-[orange]">35$</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
          </div>
        </div>
        <div className="w-full lg:w-[448px] h-auto lg:h-[726px] mt-4 lg:mt-[84px]">
          <Link href={"/shop"}>
            <Image
              src="/images/drinks.png"
              alt="image"
              width={450}
              height={730}
              className="w-full h-auto object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default StartardMenu;
