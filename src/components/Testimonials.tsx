'use client'
import { Star } from 'lucide-react'
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
import { greatVibesFont } from '@/font'

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  rating: number
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alamin Hasan",
    role: "Food Specialist",
    image: "/images/Ellipse.png",
    rating: 4,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat."
  },
]

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      
  <div className="relative w-full max-w-6xl mx-auto px-4 py-24 overflow-hidden">
    {/* Decorative title */}
    <h3 className={`${greatVibesFont.className} font-great-vibes text-3xl text-[#FF9F0D] mb-6 `}>
      Testimonials
    </h3>
    
    {/* Main heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
      What our client are saying
    </h2>

    {/* Testimonial card */}
    <div className="relative  mt-[122px]">
      <Card className="relative bg-white shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
        {/* Profile image */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              fill
              className="object-cover"
             
            />
          </div>
        </div>

        {/* Quote mark */}
        <div className="text-center mt-16 mb-8">
          <span className="text-6xl text-[#FF9F0D] font-serif"></span>
        </div>

        {/* Content */}
        <blockquote className='text-center text-lg text-gray-600 mb-8'>
          {testimonials[activeIndex].content}
        </blockquote>

        {/* Rating */}
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-6 h-6 ${
                index < testimonials[activeIndex].rating
                  ? "fill-[#FF9F0D] text-[#FF9F0D]"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Author info */}
        <div className="text-center">
          <h4 className="font-bold text-2xl text-gray-800 mb-2">
            {testimonials[activeIndex].name}
          </h4>
          <p className="text-gray-500">
            {testimonials[activeIndex].role}
          </p>
        </div>
      </Card>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex
                ? "bg-[#FF9F0D]"
                : "bg-[#FF9F0D] bg-opacity-30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>

    {/* Decorative background image */}
    <div className="absolute right-0 bottom-0 w-1/3 h-1/2 opacity-20 pointer-events-none">
      <Image
        src="/images/flower.png"
        alt="flower"
        fill
        className="object-contain object-bottom"
       
      />
    </div>
  </div>        
         <div>
            <Image src="/images/banner.png" alt="banner" width={2000} height={600}></Image>
        </div>
    </div>
  )
}

export default Testimonials