//src\components\About.tsx

import { GraduationCap, Coffee, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function WhyChooseUs() {
  return (
    <section className="relative w-full max-w-7xl mx-auto mt-[120px] px-4 py-24">
        {/* About Us Section */}
        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2 w-full h-auto aspect-[350/550]">
              <Image
                src="/images/shawarma.png?height=560&width=350"
                alt="Tacos"
                width={350}
                height={550}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="w-full h-auto aspect-square">
              <Image
                src="/images/kabab2.png?height=271&width=309"
                alt="Fried food"
                width={309}
                height={271}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="w-full h-auto aspect-[309/382]">
              <Image
                src="/images/why2.png?height=382&width=309"
                alt="Salad"
                width={309}
                height={382}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 lg:mt-16">
          <h3 className="text-green-500 font-serif text-lg sm:text-xl mb-2">About us</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-black font-bold mb-4 sm:mb-6 md:mb-8">
            Food is an important part Of a balanced Diet
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae
            mus risus.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/menu">
              <button className="bg-green-700 w-full sm:w-auto text-white text-base sm:text-lg px-8 py-3 rounded-md font-semibold transition-colors duration-300 hover:bg-green-800">
                Show more
              </button>
            </Link>
            <button className="flex items-center justify-center sm:justify-start space-x-2 text-black">
              <div className="bg-green-700 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
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
              <span className="font-bold text-base sm:text-lg">Watch video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl font-bold text-gray-800 font-helvetica">
          Why Choose us
        </h2>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
      </div>

      {/* Background Image */}
      <div className="relative w-full h-96 mb-16">
        <Image
          src="/images/about2.png?height=384&width=1320"
          alt="Delicious food presentation"
          width={1325}
          height={390}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Best Chef */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50">
            <GraduationCap className="w-8 h-8 text-gray-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Best Chef</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
          </p>
        </div>

        {/* 120 Item Food */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50">
            <Coffee className="w-8 h-8 text-gray-800" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">120 Item food</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
          </p>
        </div>

        {/* Clean Environment */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50">
            <Users className="w-8 h-8 text-gray-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Clean Environment</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
          </p>
        </div>
      </div>
    </section>
  )
}

