"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import Link from "next/link";



interface Product {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function CheckoutForm() {
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [products, setProducts] = useState<Product[]>([])
  const router = useRouter()
   
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setProducts(JSON.parse(savedCart))
    }
  }, [])

  const calculateSubtotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0)
  }

  const handlePlaceOrder = () => {
    // Here you would typically send the order to your backend
    // For this example, we'll just clear the cart and show a success message
    localStorage.removeItem("cart")
    router.push('/order-success')
  }
  
  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Left Column - Forms */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="Enter first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Enter last name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" placeholder="Enter phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Enter company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="la">Los Angeles</SelectItem>
                    <SelectItem value="ch">Chicago</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP code</Label>
                <Input id="zipCode" placeholder="Enter ZIP code" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address1">Address 1</Label>
                <Input id="address1" placeholder="Enter street address" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address2">Address 2</Label>
                <Input
                  id="address2"
                  placeholder="Enter apartment, suite, etc."
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Billing Address</h2>
            <div className="flex items-center space-x-2 mb-6">
              <Checkbox
                id="sameAddress"
                checked={sameAsShipping}
                onCheckedChange={(checked) =>
                  setSameAsShipping(checked as boolean)
                }
              />
              <label
                htmlFor="sameAddress"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Same as shipping address
              </label>
            </div>
          </div>

         
          <div className="mt-8 grid grid-cols-2 gap-4">
              <Link href={'/shoppingCart'} >
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to cart
                </Button>
              </Link>
              <Button onClick={handlePlaceOrder} className="bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 flex items-center gap-2">
                Place Order
                <ArrowRight className="h-4 w-4" />
              </Button>
           </div>
          

        </div>

        {/* Order Summary */}
        <Card className="h-fit">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Order Items */}
              {products.map((product) => (
                <div key={product.id} className="flex gap-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-20 w-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                    <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}

          <Separator className="my-6" />

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Sub-total</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount</span>
              <span>25%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>${(calculateSubtotal() * 0.1).toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${(calculateSubtotal() * 1.1).toFixed(2)}</span>
            </div>
          </div>
          </CardContent>
          <CardFooter>
          <Button onClick={handlePlaceOrder} className="w-full mt-6 bg-[#FF9F0D] hover:bg-[#FF9F0D]/90">
            Place an order
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
