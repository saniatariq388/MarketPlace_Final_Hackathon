import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#A8BCA1]/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl text-black font-bold">Foodtuck</h2>
            <p className="text-gray-700">
              Subscribe our newsletter and get discount 25%off
            </p>
            <div className="flex w-full max-w-sm space-x-2">
              <Input 
                type="email" 
                placeholder="Enter Your Email"
                className="bg-white"
              />
              <Button className="bg-[#195A00] hover:bg-[#195A00]/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="w-[184px] h-[44px]">
                <Image src="/images/social.png" alt="social" width={190} height={50}></Image>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Contact us</h3>
            <div className="space-y-4 text-black">
              <div className="flex items-center  space-x-3">
                <MapPin className="h-5 w-5 text-gray-700" />
                <span>Kolkata India, 3rd Floor, Office 45</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-700" />
                <span>00965 - 96659986</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-700" />
                <span>M.Alyaqout@4house.Co</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-700" />
                <span>Sun - Sat / 10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#" className="text-gray-700 hover:text-gray-900">About us</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Our Menu</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">Team</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">FAQ</Link>
            </nav>
          </div>

          {/* Instagram Gallery */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">Instagram Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
             
                <div className="aspect-square overflow-hidden rounded-md">
                  <Image
                    src={`/images/pic1.png?height=108&width=109`}
                    alt={`Gallery image`}
                    className="h-full w-full object-cover"
                    width={110}
                    height={110}
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-md">
                  <Image
                    src={`/images/pic2.png?height=108&width=109`}
                    alt={`Gallery image`}
                    className="h-full w-full object-cover"
                    width={110}
                    height={110}
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-md">
                  <Image
                    src={`/images/pic3.png?height=108&width=109`}
                    alt={`Gallery image`}
                    className="h-full w-full object-cover"
                    width={110}
                    height={110}
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-md">
                  <Image
                    src={`/images/pic4.png?height=108&width=109`}
                    alt={`Gallery image`}
                    className="h-full w-full object-cover"
                    width={110}
                    height={110}
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-md">
                  <Image
                    src={`/images/pic5.png?height=108&width=109`}
                    alt={`Gallery image`}
                    className="h-full w-full object-cover"
                    width={110}
                    height={110}
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-md">
                  <Image
                    src={`/images/pic6.png?height=108&width=109`}
                    alt={`Gallery image`}
                    className="h-full w-full object-cover"
                    width={110}
                    height={110}
                  />
                </div>
            
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-8 bg-[#195A00] py-4 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-4 px-4 md:flex-row md:space-y-0">
          <p>Copyright © 2000-2020.logo.com. All rights reserved</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-gray-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-200">Term of Use</Link>
            <Link href="#" className="hover:text-gray-200">Partner</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

