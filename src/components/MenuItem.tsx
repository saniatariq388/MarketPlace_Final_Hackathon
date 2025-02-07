//src\components\MenuItem.tsx
        'use client'

import { Leaf } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from 'next/link'

interface MenuItem {
  name: string
  description: string
  calories: number
  price: number
}

const menuItems: MenuItem[] = Array(8).fill({
  name: "Alder Grilled Chinook Salmon",
  description: "Toasted French bread topped with romano, cheddar",
  calories: 560,
  price: 32,
})

export default function FoodMenu() {
  return (
  <div> 
     <section className="container mx-auto px-4 py-16">
  <div className="mb-12 text-center">
    <div className="relative mb-4">
      <h2 className="text-4xl font-bold text-gray-800">
        Our Food Menu
        <Leaf className="absolute -right-6 top-0 h-5 w-5 rotate-45 text-[#195A00]" />
      </h2>
    </div>
    <p className="text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br />
      Varius sed pharetra dictum neque massa congue
    </p>
  </div>

  <Tabs defaultValue="breakfast" className="w-full text-black">
    <TabsList className="mb-8 w-full justify-center gap-8 bg-transparent">
      {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map((meal) => (
        <TabsTrigger
          key={meal}
          value={meal.toLowerCase()}
          className="data-[state=active]:border-b-2 data-[state=active]:border-[#195A00] data-[state=active]:text-[#195A00]"
        >
          {meal}
        </TabsTrigger>
      ))}
    </TabsList>

    {["breakfast", "lunch", "dinner", "dessert", "drink", "snack"].map((tab) => (
      <TabsContent key={tab} value={tab}>
        <div className="grid gap-8 md:grid-cols-2">
          {menuItems.map((item, index) => (
            <Card key={index} className="relative border-none p-6">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
                <span className="text-2xl font-bold text-[#195A00]">${item.price}</span>
              </div>
              <p className="mb-2 text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-500">{item.calories} CAL</p>
              <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-gray-200" />
            </Card>
          ))}
        </div>
      </TabsContent>
    ))}
  </Tabs>

  <div className="mt-12 flex justify-center">
   <Link href={"/menu"}> <Button variant="outline" className="border-[#195A00] text-[#195A00] hover:bg-[#195A00] hover:text-white">
      View menu
    </Button></Link>
  </div>
</section>
</div>
  )
}
