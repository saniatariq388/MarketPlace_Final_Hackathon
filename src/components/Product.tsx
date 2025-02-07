'use client'

import { useState } from 'react'
import { ArrowRight, Heart, ShoppingBag, GitCompareIcon as GitDiff } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { products } from '@/constant/products'



export default function SimilarProducts() {
  const [startIndex, setStartIndex] = useState(0)

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % Math.max(0, products.length - 3))
  }

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + Math.max(0, products.length - 3)) % Math.max(0, products.length - 3))
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Similar Products</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={prevSlide} className="h-10 w-10 rounded-full bg-[#FAF7F2]">
            <ArrowRight className="h-4 w-4 rotate-180 text-black" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="h-10 w-10 rounded-full bg-[#FF9F0D] text-white hover:bg-[#FF9F0D]/90"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex gap-4 sm:gap-6 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              className="flex-none w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-16px)] lg:w-[312px]"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.src || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover w-full h-full"
                    width={410}
                    height={410}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[#FF9F0D] font-normal">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                        <div className="w-12 h-[1px] bg-gray-300 hidden sm:block" />
                      </>
                    )}
                  </div>
                </div>
                <div className="flex justify-center gap-2 sm:gap-4 pb-4">
                  <Button variant="ghost" size="icon" className="h-8 w-8 bg-[#FF9F0D]">
                    <GitDiff className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 bg-[#FF9F0D] text-white">
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 bg-[#FF9F0D]">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

