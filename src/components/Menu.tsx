//src\components\Menu.tsx
import { Star, ShoppingBag, Heart, Eye } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const menuItems = [
  { icon: "☕", label: "Americano", active: false },
  { icon: "☕", label: "Esperesso", active: true },
  { icon: "☕", label: "Arabica", active: false },
  { icon: "☕", label: "Coffee stimy", active: false },
  { icon: "📦", label: "Organic Pack", active: false },
]

const coffeeProducts = Array(6).fill({
  title: "Coffee Beans",
  price: "43.78",
  rating: 5,
  image: "/images/coffee1.png?height=400&width=600"
  
})

export default function CoffeeMenu() {
  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Favorites Menu
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque
        </p>
      </div>

      <div className="grid md:grid-cols-[312px,1fr] text-black gap-8">
        {/* Side Menu */}
        <div className="bg-[#EDEAE3] flex flex-col gap-6 p-6 rounded-lg space-y-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={`w-[258px] h-[78px]  justify-start text-left box-border border-2 border-[#BC9A6C] ${
                item.active ? "bg-[#BC9A6C] hover:bg-[#BC9A6C]/90" : ""
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffeeProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative group">
                <Image
                  src={product.image}
                  alt="Coffee"
                  className="w-full aspect-[4/3] object-cover"
                  width={600}
                  height={400}
                />
                 {index === 0 && ( // Show social icons only on the first image
                <div className="absolute right-2 top-2 flex flex-col gap-2">
                  <Button size="icon" variant="secondary" className="bg-[#EDEAE3] hover:bg-[#EDEAE3]/90">
                    <ShoppingBag className="h-4 w-4 text-[#BC9A6C]" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-[#EDEAE3] hover:bg-[#EDEAE3]/90">
                    <Heart className="h-4 w-4 text-[#BC9A6C]" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-[#EDEAE3] hover:bg-[#EDEAE3]/90">
                    <Eye className="h-4 w-4 text-[#BC9A6C]" />
                  </Button>
                </div>
                 )}
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-gray-800">{product.title}</h3>
                  <div className="flex gap-1">
                    {Array(product.rating).fill(null).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#BC9A6C] text-[#BC9A6C]" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-500">${product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {[0, 1, 2].map((dot, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === 1 ? "bg-[#BC9A6C]" : "bg-[#BC9A6C]/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

