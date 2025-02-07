import React from 'react'
import Image from 'next/image'



export default function PartnersSection() {
  const partners = [
    {
      name: "Restaurant",
      logo: "/images/returant.png?height=100&width=200",
    },
    {
      name: "Bakery",
      logo: "/images/bakery.png?height=100&width=200",
    },
    {
      name: "Fork & Spoon",
      logo: "/images/folk.png?height=100&width=200",
    },
    {
      name: "Wolf Coffee",
      logo: "/images/coffee.png?height=100&width=200",
    },
    {
      name: "Bistro",
      logo: "/images/bist.png?height=100&width=200",
    },
    {
      name: "Bakery",
      logo: "/images/bakery2.png?height=100&width=200",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 relative">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <span className="text-[#195A00] font-['Miniver'] text-base sm:text-lg inline-block mb-2 sm:mb-4">
          Partners & Clients
        </span>
        <h2 className="text-[#333333] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
          We work with the best people
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] grayscale hover:grayscale-0 transition-all duration-300"
          >
            <div className="relative w-full h-0 pb-[50%]">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                className="object-contain"
                fill
                sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 200px"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

  
  