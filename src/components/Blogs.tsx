//src\components\Blogs.tsx

import { greatVibesFont } from '@/font'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { DotIcon as ChatDots, Link, Share2, ThumbsUp } from 'lucide-react'
import Image from 'next/image'



function Blogs() {
  return (
    <div>
      <div className="w-full flex flex-col items-center mt-12 md:mt-[120px] justify-center">
        {/* Section Header */}
        <h4 className={`${greatVibesFont.className} text-2xl md:text-[32px] leading-[40px] text-orange-500`}>
          Blog Post
        </h4>
        <h1 className="text-3xl md:text-[48px] leading-tight md:leading-[56px] font-extrabold text-center">
          <span className="text-[#FF9F0D]">La</span>test News & Blog
        </h1>

        {/* Blog Cards */}
        <div className="w-full px-4 md:w-[1320px] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mt-8 md:mt-[50px] mb-12 md:mb-[123px]">
          {/* Blog Card 1 */}
          <Card className="border border-white bg-black text-white">
            <div className="aspect-[1.63/1]">
              <Image
                src="/images/burgerr.png?height=350&width=424"
                alt="Food blog post"
                className="h-full w-full object-cover"
                width={450}
                height={400}
              />
            </div>
            <CardContent className="flex flex-col gap-4 p-6">
              <time className="text-base text-[#FF9F0D]">10 February 2022</time>
              <h3 className="font-helvetica text-lg md:text-2xl font-bold leading-tight">
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </h3>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-6">
              <Link href="#" className="text-sm md:text-base text-white hover:text-[#FF9F0D]">
                Learn More
              </Link>
              <div className="flex gap-4">
                <button className="group">
                  <ThumbsUp className="h-5 w-5 text-white transition-colors group-hover:text-[#FF9F0D]" />
                </button>
                <button className="group">
                  <ChatDots className="h-5 w-5 text-[#FF9F0D] transition-colors group-hover:text-white" />
                </button>
                <button className="group">
                  <Share2 className="h-5 w-5 text-white transition-colors group-hover:text-[#FF9F0D]" />
                </button>
              </div>
            </CardFooter>
          </Card>

          {/* Blog Card 2 */}
          <Card className="border border-white bg-black text-white">
            <div className="aspect-[1.63/1]">
              <Image
                src="/images/pizza.png?height=350&width=424"
                alt="Food blog post"
                className="h-full w-full object-cover"
                width={450}
                height={360}
              />
            </div>
            <CardContent className="flex flex-col gap-4 p-6">
              <time className="text-base text-[#FF9F0D]">10 February 2022</time>
              <h3 className="font-helvetica text-lg md:text-2xl font-bold leading-tight">
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </h3>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-6">
              <Link href="#" className="text-sm md:text-base text-white hover:text-[#FF9F0D]">
                Learn More
              </Link>
              <div className="flex gap-4">
                <button className="group">
                  <ThumbsUp className="h-5 w-5 text-white transition-colors group-hover:text-[#FF9F0D]" />
                </button>
                <button className="group">
                  <ChatDots className="h-5 w-5 text-[#FF9F0D] transition-colors group-hover:text-white" />
                </button>
                <button className="group">
                  <Share2 className="h-5 w-5 text-white transition-colors group-hover:text-[#FF9F0D]" />
                </button>
              </div>
            </CardFooter>
          </Card>

          {/* Blog Card 3 */}
          <Card className="border border-white bg-black text-white">
            <div className="aspect-[1.63/1]">
              <Image
                src="/images/shawarma.png?height=350&width=424"
                alt="Food blog post"
                className="h-full w-full object-cover"
                width={450}
                height={360}
              />
            </div>
            <CardContent className="flex flex-col gap-4 p-6">
              <time className="text-base text-[#FF9F0D]">10 February 2022</time>
              <h3 className="font-helvetica text-lg md:text-2xl font-bold leading-tight">
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </h3>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-6">
              <Link href="#" className="text-sm md:text-base text-white hover:text-[#FF9F0D]">
                Learn More
              </Link>
              <div className="flex gap-4">
                <button className="group">
                  <ThumbsUp className="h-5 w-5 text-white transition-colors group-hover:text-[#FF9F0D]" />
                </button>
                <button className="group">
                  <ChatDots className="h-5 w-5 text-[#FF9F0D] transition-colors group-hover:text-white" />
                </button>
                <button className="group">
                  <Share2 className="h-5 w-5 text-white transition-colors group-hover:text-[#FF9F0D]" />
                </button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
