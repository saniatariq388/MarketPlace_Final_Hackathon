'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MicroscopeIcon as MagnifyingGlass, Menu, ShoppingBag, User } from 'lucide-react'
import React from 'react'




function HeroHeader() {
  return (
    <div>
        <div className="my-[50px]">
      <div className="relative w-full overflow-hidden">
        {/* Hero Images */}
        <div className="hidden md:block">
          <div className="absolute inset-0 w-full top-0 left-0 h-[1010px] z-10" />
          <Image
            src="/images/bg.png"
            alt="Delicious Food"
            width={2000}
            height={1000}
            className="object-cover w-full h-[1010px]"
          />
        </div>

        <div className="absolute top-0 left-0 z-20 bg-transparent w-full">
          {/* Navigation */}
          <nav className="container mx-auto px-4 sm:px-6 lg:px-20 py-6 lg:py-12">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-black">
                Foodtuck
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                <Link href="/" className="font-bold text-black hover:text-orange-500 text-sm sm:text-base">
                  Home
                </Link>
                {["Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-orange-300 hover:text-orange-500 text-sm sm:text-base"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Icons */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button aria-label="Search" className="p-2">
                  <MagnifyingGlass className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button aria-label="Shopping bag" className="p-2">
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button aria-label="User account" className="p-2">
                  <User className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button aria-label="Menu" className="p-2 lg:hidden">
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-20 pt-8 sm:pt-12 lg:pt-20">
            <div className="max-w-xl space-y-4 sm:space-y-6">
              {/* Decorative Stars */}
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#195A00] transform rotate-45" />
                  ))}
                </div>
                <span className="text-[#195A00] font-miniver text-sm sm:text-base">Healthy & Testy Food</span>
                <div className="w-4 sm:w-6 h-0.5 bg-[#195A00] rounded" />
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Enjoy Healthy Life & Testy Food.
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 sm:px-8 py-3 bg-[#195A00] text-white rounded-md font-bold hover:bg-[#143f00] transition-colors text-sm sm:text-base">
                  Order Now
                </button>
                <button className="px-6 sm:px-8 py-3 border-2 border-[#195A00] text-[#195A00] rounded-md font-bold hover:bg-[#195A00] hover:text-white transition-colors text-sm sm:text-base">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroHeader