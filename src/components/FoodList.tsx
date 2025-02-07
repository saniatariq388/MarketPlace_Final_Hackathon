"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { client } from "@/sanity/lib/client";

interface Ires {
  name: string;
  _id: number;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
  category: string;
}

export default function FoodList() {
  const [foods, setFoods] = useState<Ires[]>([]);
  const [priceRange, setPriceRange] = useState([0, 8000]);

  useEffect(() => {
    const fetchFoodsData = async () => {
      try {
        const res = await client.fetch(
          "*[_type == 'food']{_id, 'image': image.asset->url, originalPrice, price, name, description, category}"
        );
        setFoods(res);
        // console.log("😉 food",res)
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };
    fetchFoodsData();
    //  console.log( fetchFoodsData();)
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 text-black">
      {/* Top Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-gray-700">Sort By:</span>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px] ">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className=" text-black">
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700">Show:</span>
          <Select defaultValue="default">
            <SelectTrigger className="w-[180px] text-black">
              <SelectValue placeholder="Show" />
            </SelectTrigger>
            <SelectContent className=" text-black">
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="12">12 Items</SelectItem>
              <SelectItem value="24">24 Items</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="space-y-8">
          {/* Search */}
          <Card>
            <CardContent className="p-4">
              <div className="relative">
                <Input
                  placeholder="Search Product"
                  className="pl-4 pr-10 py-2 bg-orange-50 text-[#828282]"
                />
                <Button
                  size="sm"
                  className="absolute right-0 top-0 bottom-0 bg-[#FF9F0D] hover:bg-orange-600"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <Link href={"/shopDetails"}>
            <Card>
              <CardContent className="p-4 text-black">
                <h3 className="font-bold text-xl mb-4">Category</h3>
                <div className="space-y-2">
                  {[
                    "Sandwiches",
                    "Burger",
                    "Chicken Chup",
                    "Drink",
                    "Pizza",
                    "Thai",
                    "Non Veg",
                    "Uncategorized",
                  ].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <label
                        htmlFor={category}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Price Filter */}
          <Card>
            <CardContent className="p-4 text-black">
              <h3 className="font-bold text-xl mb-4">Filter By Price</h3>
              <Slider
                defaultValue={[0, 8000]}
                max={8000}
                step={100}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-4 text-orange-500"
              />
              <div className="text-sm text-gray-600">
                From ${priceRange[0]} to ${priceRange[1]}
              </div>
            </CardContent>
          </Card>

          {/* Latest Products */}
          <Card>
            <CardContent className="p-4 text-black">
              <h3 className="font-bold text-xl mb-4">Latest Products</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Pizza",
                    price: "$35.00",
                    rating: 4,
                    src: "/images/product20.png",
                  },
                  {
                    name: "Cupcake",
                    price: "$35.00",
                    rating: 4,
                    src: "/images/product20.png",
                  },
                  {
                    name: "Cookies",
                    price: "$35.00",
                    rating: 4,
                    src: "/images/product20.png",
                  },
                  {
                    name: "Burger",
                    price: "$35.00",
                    rating: 4,
                    src: "/images/product20.png",
                  },
                ].map((product) => (
                  <div key={product.name} className="flex gap-4">
                    {/* Image */}
                    <div className="w-16 h-16 relative bg-gray-100 rounded-md">
                      <Image
                        src={product.src}
                        alt={product.name}
                        width={64} // You can adjust these values based on your design
                        height={64} // Adjust according to the desired size
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{product.name}</h4>
                      <div className="text-[#FF9F0D]">{product.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Product Tags */}
          <Card>
            <CardContent className="p-4 text-black">
              <h3 className="font-bold text-xl mb-4">Product Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Services",
                  "Our Menu",
                  "Pizza",
                  "Cupcake",
                  "Burger",
                  "Cookies",
                  "Our Shop",
                  "Tandoori Chicken",
                ].map((tag) => (
                  <Button
                    key={tag}
                    variant="outline"
                    size="sm"
                    className={
                      tag === "Burger" ? "text-[#FF9F0D] border-[#FF9F0D]" : ""
                    }
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((product: Ires, index: number) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative aspect-square">
                <Link
                  href={`/shop/${product._id}?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description)}&category=${encodeURIComponent(product.category)}`}
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={265}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </Link>
                {product._id % 3 === 0 && (
                  <span className="absolute top-4 right-4 bg-[#FF9F0D] text-white px-3 py-1 rounded text-sm">
                    Sell
                  </span>
                )}
              </div>
              <CardContent className="p-2 mt-4">
                <h3 className="font-bold text-black mb-2">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF9F0D] font-medium">
                    ${product.originalPrice}
                  </span>
                  {product.price && (
                    <span className="text-gray-400 line-through">
                      ${product.price}
                    </span>
                  )}
                </div>
                <div className="flex justify-end">
                  <Link
                    href={`/shop/${product._id}?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description)}&category=${encodeURIComponent(product.category)}`}
                  >
                    <Button className="bg-[#FF9F0D] hover:bg-black">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2 text-black">
        <Button variant="outline" size="icon">
          «
        </Button>
        {[1, 2, 3].map((page) => (
          <Button
            key={page}
            variant={page === 2 ? "default" : "outline"}
            className={page === 2 ? "bg-[#FF9F0D] hover:bg-orange-600" : ""}
          >
            {page}
          </Button>
        ))}
        <Button variant="outline" size="icon">
          »
        </Button>
      </div>
    </div>
  );
}
